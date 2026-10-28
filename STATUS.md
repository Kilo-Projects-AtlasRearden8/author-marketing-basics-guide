# STATUS

## What was built

A beginner manual for marketing a book for free, with no ad budget and no
personal data shared online. Credit: Asdale Dynamics, LLC (Indiana).

**`docs/`** — step-by-step Markdown manuals:
- `00-index.md` — how to use the guide, in order
- `01-author-bio.md` — short/medium/long bio templates + worked example
- `02-press-release.md` — one-page press release template + worked example
- `03-social-posts.md` — 7-day launch plan + ongoing post ideas
- `04-newsletter-setup.md` — free mailing-list setup and welcome email
- `05-arc-readers.md` — finding ARC readers and sending copies safely
- `06-reviews.md` — gathering honest reviews the right way
- `07-local-events.md` — readings, library talks, and local events
- `privacy-safe-marketing.md` — privacy-safe marketing checklist

**`site/`** — static HTML site with fillable, client-only templates:
- `index.html` — guide overview + links to every template
- `templates/*.html` — fillable forms for bio, press release, social posts,
  newsletter, ARC readers, reviews, local events, privacy checklist
- `css/style.css` — clean, warm, responsive styles
- `js/app.js` — client-only form logic; nothing is sent to a server

**Root files:** `README.md`, `LICENSE` (MIT, Copyright (c) 2026 Asdale Dynamics,
LLC).

## How to run it

The site is pure static HTML — no build step, no server, no secrets.

- Open `site/index.html` in any browser (works offline).
- Or serve locally: `python3 -m http.server 8000 --directory site`, then visit
  `http://localhost:8000`.
- Or host free on GitHub Pages / Netlify Drop by uploading `site/`.

Template forms run entirely in the browser: fill in the bracketed fields, click
Copy, and paste into your own document.

## Verification results

- Internal link check: all `href`/`src` references across `site/*.html` and
  `site/templates/*.html` resolve to existing files (0 broken links).
- HTML structure check: all tags open/close correctly across every HTML page
  (0 structural errors).
- Local server smoke test: every page (`index.html`, all 8 templates, `css/`,
  `js/`) returns HTTP 200 when served with `python3 -m http.server`.
- No `.github/workflows` files present. No secrets, API keys, or real personal
  data in any file (emails/addresses in examples are placeholders).

## Known gaps

- The manuals use `The Massive AI Manual` / Dylan Asdale as the worked example;
  users must swap in their own book details via the templates.
- ARC reader tracker and newsletter subscriber list are described as local-only
  spreadsheets; no template file is included for them (keep them on your own
  computer per the privacy checklist).
- No automated test suite or CI configuration (by design: no build step, no
  `.github/workflows`). Verification is manual link/structure/server checks.
- Example email/address placeholders (`author@example.com`,
  `dylan@example-indiana-author.com`) must be replaced with real dedicated
  author contact details before publishing.
