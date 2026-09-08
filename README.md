# Eclipse Roleplay — هیرو سکشن

پروژه‌ی React + TypeScript + Tailwind + Vite برای سرور فایوم Eclipse Roleplay، با تم مشکی و بنفش پررنگ.

## اجرا روی سیستم خودتان

```bash
npm install
npm run dev
```

سپس آدرس نمایش‌داده‌شده در ترمینال (معمولاً `http://localhost:5173`) را در مرورگر باز کنید.

برای ساخت نسخه‌ی نهایی برای آپلود روی هاست:

```bash
npm run build
```

خروجی در پوشه‌ی `dist/` قرار می‌گیرد؛ محتوای همین پوشه را روی هاست خود آپلود کنید.

## کجا چی رو ادیت کنم؟

| چی می‌خوای عوض کنی | کجا |
|---|---|
| ویدیوی پس‌زمینه | `src/components/Hero.tsx` → مقدار `VIDEO_SRC` را به لینک ویدیوی خودتان تغییر دهید |
| متن تیتر اصلی | `src/components/Hero.tsx` → پراپ `text` در `AnimatedHeading` |
| زیرنویس و دکمه‌ها | همان فایل، داخل بخش «Left column» |
| لینک‌های نوبار / نام برند | `src/components/Navbar.tsx` |
| رنگ‌های بنفش/مشکی | `tailwind.config.js` → آبجکت `eclipse` |
| افکت شیشه‌ای (liquid glass) | `src/index.css` |

### ویدیوی پس‌زمینه
چون لینک ویدیوی مخصوص سرور شما را نداشتم، فعلاً `VIDEO_SRC` خالی گذاشته شده و به‌جایش یک پس‌زمینه‌ی گرادیانت بنفش/مشکی متحرک (`eclipse-fallback-bg` در `index.css`) نمایش داده می‌شود. کافیست یک لینک ویدیوی mp4 (آپلود شده روی هاست، CDN یا S3) داخل `VIDEO_SRC` بگذارید تا ویدیو به‌صورت خودکار، بدون هیچ لایه‌ی تیره‌کننده، پخش شود.

## فونت
فونت Inter از گوگل فونتز از طریق `index.html` لود می‌شود و به‌صورت پیش‌فرض روی کل سایت (`body` و `font-sans` در Tailwind) اعمال شده است.

## رانش (Deploy) روی GitHub Pages

این پروژه یک ورک‌فلوی گیت‌هاب اکشن آماده دارد (`.github/workflows/deploy.yml`) که با هر پوش به شاخه‌ی `main`، خودش بیلد می‌گیره و روی GitHub Pages منتشر می‌کنه.

۱. یک ریپازیتوری جدید و **پابلیک** در گیت‌هاب بسازید (مثلاً به نام `eclipse-roleplay`).

۲. اگر اسم ریپازیتوری شما چیزی غیر از `eclipse-roleplay` است، فایل `vite.config.ts` را باز کنید و مقدار `base` را به `'/اسم-ریپازیتوری-شما/'` تغییر دهید.

۳. توی پوشه‌ی پروژه، این دستورات رو اجرا کنید:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/eclipse-roleplay.git
git push -u origin main
```

۴. وارد ریپازیتوری در گیت‌هاب بشید → **Settings → Pages** → زیر «Build and deployment» گزینه‌ی **Source** را روی **GitHub Actions** بگذارید (نه Deploy from a branch).

۵. برگردید به تب **Actions** و صبر کنید ورک‌فلوی «Deploy to GitHub Pages» تمام بشه (سبز بشه).

۶. سایت شما روی این آدرس بالا میاد:

```
https://USERNAME.github.io/eclipse-roleplay/
```

از این به بعد، هر بار که تغییری بدید و `git push` کنید، سایت خودش دوباره بیلد و آپدیت می‌شه.

