import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const distRoot = resolve(root, "dist");
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".tgs": "application/gzip",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendFile(request, response, filePath, noCache = false) {
  const stat = statSync(filePath);
  response.statusCode = 200;
  response.setHeader("Content-Type", contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream");
  response.setHeader("Content-Length", stat.size);
  response.setHeader("X-Content-Type-Options", "nosniff");

  if (noCache) {
    response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    response.setHeader("Pragma", "no-cache");
    response.setHeader("Expires", "0");
  } else {
    response.setHeader("Cache-Control", "public, max-age=3600");
  }

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}

const server = createServer((request, response) => {
  try {
    const url = new URL(request.url || "/", "http://localhost");
    let pathname = decodeURIComponent(url.pathname);

    // Coolify may preserve or strip the configured /gift route prefix.
    pathname = pathname.replace(/^\/gift(?=\/|$)/, "") || "/";

    if (pathname !== "/") {
      const requestedFile = resolve(join(distRoot, pathname.replace(/^\/+/, "")));
      const insideDist = requestedFile === distRoot || requestedFile.startsWith(`${distRoot}${sep}`);

      if (insideDist && existsSync(requestedFile) && statSync(requestedFile).isFile()) {
        sendFile(request, response, requestedFile);
        return;
      }
    }

    sendFile(request, response, join(distRoot, "index.html"), true);
  } catch {
    response.statusCode = 400;
    response.end("Bad Request");
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`StarPay gift landing is listening on port ${port}`);
});
