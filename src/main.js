import lottie from "lottie-web/build/player/lottie_light_canvas.js";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/space-grotesk/700.css";
import "./styles.css";

const giftPageUrl = "https://starpay.uz/gift";
const assetUrl = (path) => {
  if (!path || /^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

lottie.setQuality("medium");

const giftIds = [
  "5170233102089322756",
  "5969796561943660080",
  "5956217000635139069",
  "6026193266406327981",
  "5866352046986232958",
  "5974210632977745012",
  "5935895822435615975",
  "5893356958802511476",
  "6046178578163303744",
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="page-fit">
  <section class="page-shell" aria-labelledby="page-title">
    <div class="ambient-background" aria-hidden="true">
      <div class="ambient-scene">
        <img class="ambient-scene__base" src="${assetUrl("assets/decor/ambient-base.webp")}" alt="" />
        <img class="ambient-decor ambient-decor--telegram-upper" src="${assetUrl("assets/decor/yEabu.png")}" alt="" />
        <img class="ambient-decor ambient-decor--gift" src="${assetUrl("assets/decor/iymo9.png")}" alt="" />
        <img class="ambient-decor ambient-decor--star" src="${assetUrl("assets/decor/Y0vxbQ.png")}" alt="" />
        <img class="ambient-decor ambient-decor--telegram-lower" src="${assetUrl("assets/decor/i8uMOW.png")}" alt="" />
      </div>
    </div>

    <div class="main-content">
      <header class="brand-header">
        <a class="brand-lockup" href="${giftPageUrl}" aria-label="StarPay gift sahifasiga o‘tish">
          <img class="brand-star" src="${assetUrl("assets/brand/starpay-icon-official.png")}" alt="" aria-hidden="true" />
          <strong>StarPay</strong>
        </a>
      </header>

      <section class="slogan">
        <span class="slogan__line" aria-hidden="true"></span>
        <h1 id="page-title">O‘z kolleksiyalaringizni hoziroq qo‘lga kiriting</h1>
      </section>

      <section class="collection-panel" aria-labelledby="collection-title">
        <h2 id="collection-title">Kolleksiyalar</h2>
        <div class="gift-grid" id="gift-grid" aria-live="polite"></div>
      </section>

      <section class="payments" aria-labelledby="payments-title">
        <div class="section-heading">
          <h2 id="payments-title">To‘lov usullari</h2>
        </div>
        <div class="payment-grid">
          <a class="payment-card" href="${giftPageUrl}" aria-label="Click orqali kolleksiya olish">
            <img src="${assetUrl("assets/payments/click.svg")}" alt="Click" />
            <small>Click</small>
          </a>
          <a class="payment-card" href="${giftPageUrl}" aria-label="Payme orqali kolleksiya olish">
            <img src="${assetUrl("assets/payments/payme.png")}" alt="Payme" />
            <small>Payme</small>
          </a>
          <a class="payment-card" href="${giftPageUrl}" aria-label="Uzum orqali kolleksiya olish">
            <img src="${assetUrl("assets/payments/uzum.svg")}" alt="Uzum" />
            <small>Uzum</small>
          </a>
          <a class="payment-card" href="${giftPageUrl}" aria-label="Uzcard yoki Humo orqali kolleksiya olish">
            <img src="${assetUrl("assets/payments/uzcard-humo.png")}" alt="Uzcard va Humo" />
            <small>Uzcard / Humo</small>
          </a>
        </div>
      </section>
    </div>

    <footer class="checkout">
      <a class="primary-cta" href="${giftPageUrl}" aria-label="Kolleksiyalarga o‘tish">
        <svg class="primary-cta__sparkle primary-cta__sparkle--one" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
        </svg>
        <svg class="primary-cta__sparkle primary-cta__sparkle--two" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
        </svg>
        <svg class="primary-cta__sparkle primary-cta__sparkle--three" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
        </svg>
        <svg class="primary-cta__sparkle primary-cta__sparkle--four" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
        </svg>
        <svg class="primary-cta__sparkle primary-cta__sparkle--five" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
        </svg>
        <span>Kolleksiyalarga o‘tish</span>
        <svg class="primary-cta__arrow" aria-hidden="true" viewBox="0 0 14 14">
          <path d="M6.90088 2.35156q-.18115.02734-.32129.16748-.11279.11279-.14697.28028-.03418.16748.02051.32129.02734.08545.25976.3247.23242.23584 1.36377 1.37061 1.58252 1.58252 1.58252 1.59619 0 .01367-3.45557.01367H2.75822l-.08545.04102q-.22217.11279-.30078.33838-.0752.22217.00684.43408.05811.0957.14013.18115.08545.08203.16748.11963.08545.03418.53321.03418h3.01123q3.42822 0 3.42822.01367 0 .01367-1.58252 1.59619-1.13135 1.13477-1.36377 1.37402-.23242.23584-.25976.3213-.05469.15381-.02051.32128.03418.16748.14697.28028.18115.18115.42041.18115h.04102q.11279 0 .19824-.05469.14014-.09912.51611-.46484l1.68164-1.67822q2.1123-2.10205 2.15332-2.18409.07178-.12646.07178-.28027t-.07178-.28027q-.04102-.08203-2.1499-2.18067-2.10547-2.10205-2.17725-2.13623-.06836-.0376-.23584-.06494-.04102 0-.12646.01367Z" />
        </svg>
      </a>
      <p>
        <svg aria-hidden="true" viewBox="0 0 14 14">
          <path d="M6.846.602c-.232.018-.461.12-.687.307-.344.28-.678.514-1.001.701a7.1 7.1 0 0 1-1.015.475 3.6 3.6 0 0 1-.588.171 5.9 5.9 0 0 1-.67.082c-.159.01-.281.034-.366.072-.13.046-.256.12-.379.222-.12.103-.208.219-.263.349l-.014.03c-.048.085-.076.159-.085.223-.009.102-.018.303-.027.601v1.781c0 1.502.005 2.322.014 2.461.093 1.103.462 2.064 1.107 2.885.093.111.238.265.434.461.196.196.359.345.489.448.615.494 1.376.919 2.283 1.275.307.12.526.2.656.239.159.036.304.04.434.014.111-.019.289-.07.533-.154.904-.346 1.664-.747 2.28-1.203.252-.178.49-.38.714-.605.916-.914 1.43-2.038 1.542-3.374.009-.157.014-.977.014-2.461s-.01-2.269-.028-2.355a1.43 1.43 0 0 0-.318-.564 1.3 1.3 0 0 0-.55-.318c-.067-.018-.193-.032-.38-.041a4.3 4.3 0 0 1-.964-.181 6 6 0 0 1-1.555-.773 9 9 0 0 1-.643-.489c-.28-.223-.603-.317-.967-.28Zm.434 1.343c.429.347.872.636 1.33.869.81.412 1.561.641 2.252.687h.212l-.014 4.313c0 .223-.009.391-.027.503-.15.895-.531 1.654-1.142 2.276-.61.62-1.499 1.144-2.666 1.572l-.211.085-.182-.055c-1.55-.57-2.627-1.313-3.233-2.228a4.3 4.3 0 0 1-.632-1.637 3.5 3.5 0 0 1-.028-.502L2.93 3.5h.195c.579-.036 1.195-.197 1.849-.482a7.3 7.3 0 0 0 1.835-1.128c.112-.093.177-.14.195-.14s.111.065.28.195Zm1.33 3.319-.127.051c-.036.014-.39.356-1.063 1.025l-.995.995-.406-.403a5 5 0 0 0-.362-.338.6.6 0 0 0-.198-.14.5.5 0 0 0-.195-.028.5.5 0 0 0-.167.014.8.8 0 0 0-.1.041.7.7 0 0 0-.28.267.6.6 0 0 0-.041.253v.014c0 .093.011.164.034.212.025.045.084.12.178.222.063.075.226.244.489.506l.04.041c.281.28.466.463.554.547.089.082.156.133.202.154a.5.5 0 0 0 .294.054.6.6 0 0 0 .28-.1c.048-.036.477-.46 1.29-1.27.578-.58.928-.934 1.049-1.063.123-.133.193-.223.212-.27a.55.55 0 0 0-.058-.523.58.58 0 0 0-.448-.26.5.5 0 0 0-.181 0Z" />
        </svg>
        <span>To‘lovlar xavfsiz va himoyalangan</span>
      </p>
    </footer>
  </section>
  </div>
`;

const pageFit = document.querySelector(".page-fit");

function fitPageToViewport() {
  const viewportWidth = window.visualViewport?.width || window.innerWidth;
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  const scale = Math.min(viewportWidth / 390, viewportHeight / 844, 1);
  const useFullscreenLayout = viewportWidth <= 600;
  const layoutWidth = useFullscreenLayout ? viewportWidth / scale : 390;
  const layoutHeight = useFullscreenLayout ? viewportHeight / scale : 844;

  pageFit.style.setProperty("--page-scale", String(scale));
  pageFit.style.setProperty("--ambient-cover-scale", String(Math.max(layoutWidth / 390, layoutHeight / 844)));
  pageFit.classList.toggle("is-fullscreen", useFullscreenLayout);
  pageFit.style.width = `${layoutWidth}px`;
  pageFit.style.height = `${layoutHeight}px`;
}

fitPageToViewport();
window.addEventListener("resize", fitPageToViewport);
window.visualViewport?.addEventListener("resize", fitPageToViewport);

const grid = document.querySelector("#gift-grid");
const lottieInstances = [];
const animationFrameInterval = 1000 / 30;
const animationClockStartedAt = performance.now();
const animationGroupLastFrameAt = [0, 0];
let animationRenderGroup = 0;
let animationFrameRequest;

function cardTemplate(gift, index) {
  const title = gift.title || `Gift ${String(index + 1).padStart(2, "0")}`;
  return `
    <a class="gift-card" href="${giftPageUrl}" data-id="${gift.id}" aria-label="${title} kolleksiyasini ochish, ID ${gift.id}">
      <span class="gift-media" data-format="${gift.format || "pending"}"></span>
    </a>
  `;
}

function mountMedia(card, gift) {
  const container = card.querySelector(".gift-media");

  if (gift.preview) {
    const fallback = document.createElement("img");
    fallback.className = "gift-fallback";
    fallback.src = assetUrl(gift.preview);
    fallback.alt = "";
    fallback.setAttribute("aria-hidden", "true");
    container.append(fallback);
  }

  if (gift.format === "tgs" && gift.webAsset) {
    const animationContainer = document.createElement("span");
    animationContainer.className = "gift-animation";
    container.append(animationContainer);
    let animationStarted = false;
    const markAnimationReady = () => {
      if (animationStarted) return;
      animationStarted = true;
      container.classList.add("is-animation-ready");
    };
    const instance = lottie.loadAnimation({
      container: animationContainer,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      path: assetUrl(gift.webAsset),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        clearCanvas: true,
        dpr: 1,
      },
    });
    instance.addEventListener("DOMLoaded", markAnimationReady);
    instance.addEventListener("enterFrame", markAnimationReady);
    instance.addEventListener("error", () => {
      container.classList.remove("is-animation-ready");
    });
    instance.addEventListener("data_failed", () => {
      container.classList.remove("is-animation-ready");
    });
    lottieInstances.push(instance);
    return;
  }

  if (gift.format === "webm" && gift.asset) {
    const video = document.createElement("video");
    video.src = assetUrl(gift.asset);
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("aria-hidden", "true");
    container.append(video);
    video.play().catch(() => {});
    return;
  }

  if (gift.asset) {
    const image = document.createElement("img");
    image.className = "gift-fallback";
    image.src = assetUrl(gift.asset);
    image.alt = "";
    container.append(image);
    return;
  }

  container.classList.add("is-pending");
  container.innerHTML = `<span aria-hidden="true">▧</span>`;
}

async function renderGifts() {
  let manifest = [];
  try {
    const response = await fetch(assetUrl("assets/gifts/manifest.json"), { cache: "no-store" });
    if (!response.ok) throw new Error(`Manifest ${response.status}`);
    manifest = await response.json();
  } catch {
    manifest = giftIds.map((id) => ({ id, status: "pending" }));
  }

  const giftsById = new Map(manifest.map((gift) => [String(gift.id), gift]));
  const gifts = giftIds.map((id) => giftsById.get(id) || { id, status: "pending" });
  grid.innerHTML = gifts.map(cardTemplate).join("");
  [...grid.children].forEach((card, index) => mountMedia(card, gifts[index]));
}

renderGifts();

function renderGiftAnimations(now) {
  if (!document.hidden && now - animationGroupLastFrameAt[animationRenderGroup] >= animationFrameInterval) {
    const elapsedSeconds = (now - animationClockStartedAt) / 1000;
    lottieInstances.forEach((instance, index) => {
      if (index % 2 !== animationRenderGroup) return;
      if (!instance.isLoaded || !instance.totalFrames) return;
      const sourceFrame = (elapsedSeconds * instance.frameRate) % instance.totalFrames;
      instance.goToAndStop(sourceFrame, true);
    });
    animationGroupLastFrameAt[animationRenderGroup] = now;
    animationRenderGroup = animationRenderGroup === 0 ? 1 : 0;
  }
  animationFrameRequest = requestAnimationFrame(renderGiftAnimations);
}

animationFrameRequest = requestAnimationFrame(renderGiftAnimations);

window.addEventListener("beforeunload", () => {
  cancelAnimationFrame(animationFrameRequest);
  window.removeEventListener("resize", fitPageToViewport);
  window.visualViewport?.removeEventListener("resize", fitPageToViewport);
  lottieInstances.forEach((instance) => instance.destroy());
});
