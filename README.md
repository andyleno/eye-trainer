# 👁️ Eye Trainer – Daily Vision Exercise Tracker

A Progressive Web App (PWA) for tracking daily eye exercises, built to help manage reading discomfort associated with hyperopia (farsightedness). Installable on any mobile device directly from the browser — no app store required.

> **Disclaimer:** Eye Trainer is a personal wellness tool. The exercises included are not a substitute for corrective lenses or professional ophthalmological care. Always consult your optometrist before starting any vision exercise programme.

---

## 📱 Live App

🔗 `https://YOUR-USERNAME.github.io/eye-trainer`

---

## ✨ Features

- **5 guided daily exercises** — each with step-by-step instructions and animated visuals tailored for farsighted eyes
- **Built-in countdown timer** — per exercise, with pause/resume support
- **Daily completion tracking** — mark exercises done and see your progress at a glance
- **7-day activity heatmap** — visualise consistency over the past week
- **Streak counter** — tracks consecutive days of completing exercises
- **Exercise breakdown** — see how often each exercise is completed over time
- **Offline support** — works without an internet connection once installed
- **Installable on mobile** — Add to Home Screen on iOS and Android
- **Private by design** — all data stored locally on-device, nothing sent to any server

---

## 🏋️ Exercises Included

| Exercise | Focus Area | Duration |
|---|---|---|
| 🔭 Near-Far Focus Shifting | Ciliary muscle flexibility | 2 min |
| ✏️ Pencil Push-Ups | Convergence strength | 90 sec |
| ∞ Figure-8 Tracking | Oculomotor control | 60 sec |
| ⏱ 20-20-20 Rule | Eye strain relief | 20 sec |
| 🙌 Palming | Muscle relaxation | 2 min |

Each exercise includes a plain-language explanation of why it may help with farsighted reading difficulty, step-by-step instructions, and an interactive visual aid.

---

## 🚀 Getting Started

### Hosting on GitHub Pages

1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source branch to `main` → click **Save**
4. App is live at `https://YOUR-USERNAME.github.io/eye-trainer`

### Installing on Your Phone

**iPhone (Safari)**
1. Open the app URL in Safari
2. Tap the **Share** button → **Add to Home Screen**
3. Tap **Add**

**Android (Chrome)**
1. Open the app URL in Chrome
2. Tap **⋮ menu** → **Add to Home Screen**, or accept the install banner
3. Tap **Install**

---

## 🗂️ Project Structure

```
eye-trainer/
├── index.html      # Full application (self-contained)
├── manifest.json   # PWA manifest — enables install & home screen icon
├── sw.js           # Service worker — enables offline support
└── README.md       # This file
```

The entire app lives in a single `index.html` file with no external dependencies beyond a Google Fonts import. There is no build step, no framework CLI, and no package manager required.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI | Vanilla HTML, CSS, JavaScript |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Storage | Browser `localStorage` |
| Offline | Service Worker (Cache API) |
| Install | Web App Manifest (PWA) |

---

## 💾 Data & Privacy

All user data (completed exercises, streaks, daily logs) is stored exclusively in the browser's `localStorage` on the user's own device. No data is collected, transmitted, or stored on any server. Clearing browser data will reset the app's history.

---

## 🔭 Background & Motivation

This app was built to personally investigate whether a consistent daily eye exercise routine could improve reading comfort for someone with a +3.00 / +2.50 hyperopic prescription. The scientific evidence for eye exercises improving refractive error is limited — a 2024 meta-analysis concluded exercises have *"limited to no efficacy in preventing or controlling myopia progression"* — however, exercises targeting convergence, oculomotor control, and ciliary muscle flexibility may offer some comfort benefits. The app exists to make it easy to stay consistent and observe changes over a 4–8 week period.

---

## 🗺️ Roadmap

- [x] Push notifications / daily reminders
- [x] Custom exercise duration settings
- [x] Journal / notes per session (with mood rating)
- [x] Visual acuity self-assessment log with trend chart
- [x] Export all data as CSV
- [x] Dark / light theme toggle
- [x] Personalisation (name, prescription, goal, onboarding)
- [x] Audio — timer tones + spoken voice cues (Web Speech API)
- [ ] App icon assets (192px + 512px PNG)
- [ ] Background push notifications via Service Worker

---

## 📄 Licence

MIT — free to use, modify, and distribute.

---

## 🙏 Acknowledgements

Exercise descriptions informed by optometric vision therapy literature and guidance from the American Optometric Association. Scientific context sourced from peer-reviewed publications including Lin et al. (2024), *Eye* journal, and a systematic review by Rawstron et al. (2005), *Optometry*.
