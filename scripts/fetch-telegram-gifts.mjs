import { mkdir, readFile, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";
import { gunzipSync } from "node:zlib";

const giftIds = [
  "5935895822435615975",
  "6046178578163303744",
  "5866352046986232958",
  "5956217000635139069",
  "6026193266406327981",
  "5969796561943660080",
  "5893356958802511476",
  "5974210632977745012",
  "5170233102089322756",
];

async function loadLocalEnv() {
  try {
    const source = await readFile(resolve(".env.local"), "utf8");
    for (const rawLine of source.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const separator = line.indexOf("=");
      if (separator < 1) continue;
      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^['\"]|['\"]$/g, "");
      if (!(key in process.env)) process.env[key] = value;
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

await loadLocalEnv();

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN muhit o‘zgaruvchisi topilmadi.");
}

const outputDir = resolve("public/assets/gifts");
await mkdir(outputDir, { recursive: true });

async function telegram(method, params = {}) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(params),
  });
  const payload = await response.json();
  if (!payload.ok) throw new Error(`${method}: ${payload.description || response.status}`);
  return payload.result;
}

function extensionFor(sticker, filePath) {
  if (sticker.is_animated) return ".tgs";
  if (sticker.is_video) return ".webm";
  return extname(filePath) || ".webp";
}

const available = await telegram("getAvailableGifts");
const gifts = Array.isArray(available) ? available : available.gifts;
const byId = new Map(gifts.map((gift) => [String(gift.id), gift]));
const manifest = [];

for (const [index, id] of giftIds.entries()) {
  const gift = byId.get(id);
  if (!gift) {
    manifest.push({
      id,
      title: `Gift ${String(index + 1).padStart(2, "0")}`,
      status: "not-returned-by-getAvailableGifts",
    });
    continue;
  }

  const sticker = gift.sticker;
  const file = await telegram("getFile", { file_id: sticker.file_id });
  const extension = extensionFor(sticker, file.file_path);
  const fileName = `${id}${extension}`;
  const download = await fetch(`https://api.telegram.org/file/bot${token}/${file.file_path}`);
  if (!download.ok) throw new Error(`Download ${id}: HTTP ${download.status}`);
  const bytes = Buffer.from(await download.arrayBuffer());
  await writeFile(resolve(outputDir, fileName), bytes);

  const entry = {
    id,
    title: `Gift ${String(index + 1).padStart(2, "0")}`,
    emoji: sticker.emoji || "Telegram Gift",
    status: "downloaded-from-telegram-bot-api",
    format: extension.slice(1),
    asset: `/assets/gifts/${fileName}`,
    telegram: {
      fileUniqueId: sticker.file_unique_id,
      starCount: gift.star_count,
      upgradeStarCount: gift.upgrade_star_count ?? null,
    },
  };

  if (extension === ".tgs") {
    const jsonName = `${id}.json`;
    const animation = gunzipSync(bytes);
    JSON.parse(animation.toString("utf8"));
    await writeFile(resolve(outputDir, jsonName), animation);
    entry.webAsset = `/assets/gifts/${jsonName}`;
  }

  manifest.push(entry);
  process.stdout.write(`✓ ${id} -> ${fileName}\n`);
}

await writeFile(resolve(outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

const missing = manifest.filter((gift) => gift.status !== "downloaded-from-telegram-bot-api");
if (missing.length) {
  process.stderr.write(`\n${missing.length} ta ID getAvailableGifts javobida topilmadi:\n`);
  missing.forEach((gift) => process.stderr.write(`- ${gift.id}\n`));
  process.exitCode = 2;
}
