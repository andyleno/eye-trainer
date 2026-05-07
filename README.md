# 👁️ Eye Trainer – Daily Vision Exercise Tracker

A Progressive Web App (PWA) for tracking daily eye exercises, built to help manage reading discomfort associated with hyperopia (farsightedness). Installable on any mobile device directly from the browser — no app store required.

> **Disclaimer:** Eye Trainer is a personal wellness tool. The exercises included are not a substitute for corrective lenses or professional ophthalmological care. Always consult your optometrist before starting any vision exercise programme.

---

## 📱 Live App

🔗 `https://YOUR-USERNAME.github.io/eye-trainer`

---

## ✨ Features

- **5 guided daily exercises** — step-by-step instructions and animated visuals tailored for farsighted eyes
- **Built-in countdown timer** — per exercise, with pause/resume support
- **Auto-Step or Manual-Step navigation** — steps can advance automatically based on exercise duration, or be controlled manually
- **Daily completion tracking** — mark exercises done and see your progress at a glance
- **7-day activity heatmap** — visualise consistency over the past week
- **Streak counter** — tracks consecutive days of completing exercises
- **Exercise breakdown** — see how often each exercise is completed over time
- **Journal** — log how your eyes felt after each session with a mood rating and free-text notes
- **Visual acuity log** — self-assess clarity (1–10) for each eye and track trends over time
- **Export data** — download all logs, journal entries, and acuity readings as a CSV
- **Personalisation** — name, prescription, and goal saved on first launch; skip onboarding on return visits with a personalised welcome
- **Audio guidance** — pre-recorded voice cues for each exercise step and timer countdown; global mute toggle in the header
- **Dark / light theme** — toggle from the header
- **Info popup** — plain-language explanations of hyperopia, eye strain, convergence insufficiency, and oculomotor control
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

Each exercise includes a plain-language explanation of why it may help with farsighted reading difficulty, step-by-step instructions, and an interactive visual aid. Durations are customisable in Settings.

---

## 🚀 Getting Started

### Hosting on GitHub Pages

1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source branch to `main` → click **Save**
4. App is live at `https://YOUR-USERNAME.github.io/eye-trainer`

### Installing on Your Phone

The browser install prompt requires both `icon-192.png` and `icon-512.png` to be present in the repo root. Add your own icons before deploying (see Project Structure below).

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
├── index.html        # Full application (self-contained)
├── manifest.json     # PWA manifest — enables install & home screen icon
├── sw.js             # Service worker — offline support + audio caching
├── icon-192.png      # App icon — required for PWA install prompt (add your own)
├── icon-512.png      # App icon — required for PWA install prompt (add your own)
├── README.md         # This file
└── audio/            # Pre-generated MP3 voice cues (ElevenLabs)
    ├── welcome.mp3
    ├── onboard_complete.mp3
    ├── intro_near_far.mp3  … intro_palming.mp3
    ├── nf_step1.mp3        … nf_step6.mp3
    ├── pp_step1.mp3        … pp_step7.mp3
    ├── f8_step1.mp3        … f8_step7.mp3
    ├── tw_step1.mp3        … tw_step5.mp3
    ├── pa_step1.mp3        … pa_step7.mp3
    ├── timer_30s.mp3, timer_20s.mp3, timer_10s.mp3
    ├── timer_5s.mp3        … timer_1s.mp3
    ├── complete_near_far.mp3, complete_pencil.mp3
    ├── complete_figure8.mp3, complete_2020.mp3, complete_palming.mp3
    ├── complete_generic.mp3, complete_all.mp3
    ├── journal_prompt.mp3, journal_saved.mp3
    └── encourage_1.mp3     … encourage_4.mp3
```

The entire app lives in a single `index.html` file with no external dependencies beyond a Google Fonts import. There is no build step, no framework CLI, and no package manager required.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI | Vanilla HTML, CSS, JavaScript |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Audio | Pre-recorded MP3s via `<Audio>` API + Web Audio API (timer tones) |
| Storage | Browser `localStorage` |
| Offline | Service Worker (Cache API) |
| Install | Web App Manifest (PWA) |

---

## ⚙️ Settings

Accessible via the ⚙️ button in the header.

| Setting | Description |
|---|---|
| **Profile** | Name, prescription (left/right eye), and goal |
| **Audio — Timer tones** | Synthesised beeps during the countdown |
| **Audio — Voice guidance** | Spoken step instructions and timer cues |
| **Navigation — Auto-Step** | Steps advance automatically (duration ÷ steps); tap Prev/Next to override |
| **Exercise Durations** | Per-exercise timer duration in seconds |
| **Notifications** | Daily reminder push notification and time |
| **Appearance** | Dark / light theme |
| **Data** | Export all data as CSV · Reset all data |

The 🔊 button in the header provides a quick session mute without changing saved settings.

---

## 💾 Data & Privacy

All user data (completed exercises, streaks, daily logs, journal entries, acuity readings) is stored exclusively in the browser's `localStorage` on the user's own device. No data is collected, transmitted, or stored on any server. Clearing browser data will reset the app's history. Use **Settings → Export** to back up your data as a CSV before clearing.

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
- [x] Audio — pre-recorded voice cues per step + timer tones
- [x] Auto-Step navigation mode
- [x] Global audio mute in header
- [x] Info popup — condition explanations (hyperopia, convergence, eye strain)
- [x] Welcome toast for returning users (skips onboarding)
- [x] Accessibility — larger fonts, bigger touch targets, increased spacing
- [x] PWA install prompt (requires icon assets — see Project Structure)
- [ ] App icon assets (192px + 512px PNG) — add your own
- [ ] Background push notifications via Service Worker

---

## 📄 Licence

MIT — free to use, modify, and distribute.

---

## 🙏 Acknowledgements

Exercise descriptions informed by optometric vision therapy literature and guidance from the American Optometric Association. Scientific context sourced from peer-reviewed publications including Lin et al. (2024), *Eye* journal, and a systematic review by Rawstron et al. (2005), *Optometry*.
