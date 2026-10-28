# Author Marketing Basics Guide

A beginner-friendly manual for marketing a book for free, written for authors
with no ad budget. Includes step-by-step templates for an author bio, press
release, social media posts, newsletter setup, ARC readers, book reviews, and
local events — plus a small static HTML site you can open in any browser or host
for free on GitHub Pages.

## Who this is for

Dylan Asdale is a registered nurse turned AI author and founder of Asdale
Dynamics, LLC (Indiana, formed October 2026). His book *The Massive AI Manual*
and hub site dylanasdale.github.io explain AI "like a friend would": plain
English, step by step, never condescending.

This guide uses that same voice. The templates are written for
*The Massive AI Manual* as a worked example, but they adapt to any book —
nonfiction or fiction.

## What's included

`docs/` — substantive beginner manuals (Markdown, step by step):

| Document | What you get |
|---|---|
| `00-index.md` | How to use this guide, in order |
| `01-author-bio.md` | Short, medium, and long bio templates + example |
| `02-press-release.md` | One-page press release template + worked example |
| `03-social-posts.md` | 7-day launch plan + ongoing post ideas |
| `04-newsletter-setup.md` | Free mailing-list setup and welcome email |
| `05-arc-readers.md` | Finding ARC readers and sending copies safely |
| `06-reviews.md` | Gathering honest reviews the right way |
| `07-local-events.md` | Readings, library talks, and local events |
| `privacy-safe-marketing.md` | Privacy checklist — no personal data online |

`site/` — static HTML site with fillable templates:

| Page | What it does |
|---|---|
| `index.html` | Guide overview and links to every template |
| `templates/author-bio.html` | Fill-in bio form, copies result to clipboard |
| `templates/press-release.html` | Fill-in press release form |
| `templates/social-posts.html` | Fill-in social post templates |
| `templates/newsletter.html` | Fill-in welcome email form |
| `templates/arc-readers.html` | Fill-in ARC reader invitation form |
| `templates/reviews.html` | Fill-in review request and pull-quote forms |
| `templates/local-events.html` | Fill-in event outreach email form |
| `templates/privacy.html` | Privacy-safe checklist |
| `css/style.css` | Clean, warm, responsive styles |
| `js/app.js` | Client-only form logic (nothing sent to a server) |

## How to run the site

The site is pure static HTML — no build step, no server required, no secrets.

**Option 1: Open directly**
Open `site/index.html` in any browser. The template pages work offline.

**Option 2: Local server**
From the project folder:

```bash
python3 -m http.server 8000 --directory site
```
Then visit `http://localhost:8000`.

**Option 3: Host for free**
Upload the `site/` folder to GitHub Pages, Netlify Drop, or any static host.
Everything runs in the browser; no data is sent anywhere.

## How to use the templates

1. Read one document at a time (about 10–20 minutes each).
2. Fill in the bracketed fields (or use the HTML form and click Copy).
3. Paste the result into your own document, email, or post.
4. Work in order: bio → press release → social → newsletter → ARC → reviews → events.

## Privacy-safe by default

This guide assumes you will not publish your home address, phone number, or
private email anywhere online. Use a dedicated author email address, a general
location (e.g., "Indiana") instead of a street address, and keep reader lists
on your own computer. See `docs/privacy-safe-marketing.md` and
`site/templates/privacy.html`.

No ad budget is needed. No personal data is shared online.

## Credit

Written and published by **Asdale Dynamics, LLC** (Indiana). Focus areas:
beginner-friendly AI education, books and guides, practical tools, small-business
and author tools, accessible life-admin helpers, healthcare-worker AI aids
(education only, never medical advice), and fun extras such as gaming and chess
tools.

Hub site: https://dylanasdale.github.io

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See `LICENSE`.
