# Starpay Telegram Gifts

Pencil dizayni asosida tayyorlangan mobil landing page. Gift animatsiyalari faqat Telegram Bot API’dan yuklangan lokal assetlardan foydalanadi.

## Original gift assetlarini olish

1. [@BotFather](https://t.me/BotFather) orqali bot token oling.
2. Loyiha ildizida `.env.local` yarating:

   ```env
   TELEGRAM_BOT_TOKEN=123456789:your-token
   ```

3. Giftlarni yuklang:

   ```powershell
   npm run fetch:gifts
   ```

Skript `getAvailableGifts` va `getFile` orqali Telegram’dan original sticker faylini oladi:

- `.tgs` — original saqlanadi va brauzer uchun Lottie JSON nusxasi yaratiladi;
- `.webm` — original video fayl bevosita loop qilinadi;
- `.webp` — statik fallback sifatida ishlatiladi.

Natijalar `public/assets/gifts/` ichiga yoziladi. `manifest.json` frontendga qaysi faylni qanday render qilishni aytadi.

## Ishga tushirish

```powershell
npm install
npm run dev
```

Production build:

```powershell
npm run build
```
