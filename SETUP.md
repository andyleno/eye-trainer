# Eye Trainer PWA – Setup Guide

## Files included
- `index.html` – the full app
- `manifest.json` – makes it installable
- `sw.js` – enables offline use
- `icon-192.png` + `icon-512.png` – add your own icons (see below)

---

## Option A: GitHub Pages (Free, easiest)

1. Create a free account at https://github.com
2. Click **New repository** → name it `eye-trainer` → set to **Public**
3. Upload all 3 files (index.html, manifest.json, sw.js)
4. Go to **Settings → Pages → Branch: main → Save**
5. Your app is live at: `https://YOUR-USERNAME.github.io/eye-trainer`

---

## Option B: Netlify Drop (Fastest – no account needed)

1. Go to https://app.netlify.com/drop
2. Drag the entire `eye-tracker-pwa` folder onto the page
3. Done — you get a live URL instantly (e.g. `https://random-name.netlify.app`)
4. You can set a custom name in the site settings

---

## Installing on your phone

### iPhone (Safari only)
1. Open your hosted URL in **Safari**
2. Tap the **Share** button (box with arrow)
3. Scroll down → tap **"Add to Home Screen"**
4. Tap **Add** — the app icon appears on your home screen

### Android (Chrome)
1. Open your hosted URL in **Chrome**
2. Tap the **⋮ menu** → **"Add to Home Screen"**
   OR a banner will appear automatically at the bottom
3. Tap **Install**

---

## Adding icons (optional but recommended)

Create two square images saved as PNG:
- `icon-192.png` – 192×192 pixels
- `icon-512.png` – 512×512 pixels

Use any image editor or a free tool like https://favicon.io
A simple eye emoji on a dark background works great.

---

## Offline support
Once installed and opened once, the app works fully offline.
Your exercise data is stored on-device (localStorage) — private and never sent anywhere.
