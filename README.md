# Yaks_tech Portfolio

A single-page React portfolio for Yakubu Ishaq (Yaks_tech) — Software Developer &
Cloud/IT Solutions Specialist. Built with Vite + React, plain CSS (no UI framework
dependency), and no backend required to run.

## 1. Project structure

```
yaks-tech-portfolio/
├── index.html                # page shell, fonts, meta tags
├── public/
│   └── projects/              # project preview images live here
│       ├── dr-apple-cover.svg # placeholder — swap for a real screenshot
│       └── placeholder.svg    # generic placeholder for the other project slots
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # assembles the page from the sections below
│   ├── index.css                # design tokens (colors/type/spacing) + globals
│   ├── hooks/
│   │   └── useReveal.js         # scroll-in-view fade/rise animation hook
│   ├── data/                    # <-- edit THESE files to update site content
│   │   ├── services.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experience.js
│   └── components/
│       ├── Navbar.jsx / .css
│       ├── Hero.jsx / .css
│       ├── About.jsx / .css
│       ├── Services.jsx / .css
│       ├── Skills.jsx / .css
│       ├── Projects.jsx / .css
│       ├── ProjectCard.jsx / .css
│       ├── Experience.jsx / .css
│       ├── Contact.jsx / .css
│       └── Footer.jsx / .css
└── package.json
```

Each section of the page is its own component with its own CSS file — nothing is
crammed into one giant file. Content (services, skills, projects, timeline) is
separated into `src/data/*.js` so you can update the site without touching any
component code.

## 2. Install dependencies

You need [Node.js](https://nodejs.org) 18+ installed. Then, from inside the
`yaks-tech-portfolio` folder:

```bash
npm install
```

## 3. Run it locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with hot
reload — edit any file and the browser updates instantly.

## 4. Where to replace your personal information

- **Contact details** — `src/components/Contact.jsx`, top of the file, the
  `CONTACT` object. Fill in your real email, phone, WhatsApp number, GitHub,
  and LinkedIn. Instagram (`@Yaks_tech`) is already set.
- **Contact form** — the form validates fields (required, valid email),
  shows a loading state while sending, and a success/error message
  afterwards, but it needs one thing from you to actually deliver messages:
  an endpoint. Copy `.env.example` to `.env` and set
  `VITE_CONTACT_FORM_ENDPOINT` to a Formspree endpoint (create a free form
  at [formspree.io](https://formspree.io) and paste its URL) or any other
  service that accepts a JSON POST of `{ name, email, subject, message }`
  and returns a 2xx response. `.env` is gitignored, so the real endpoint
  never ends up in source control. Until it's set, the form still
  validates normally but shows a clear "not configured yet" message
  instead of a fake success — it never pretends to send when it can't.
- **Hero status line** — `src/components/Hero.jsx`, the "Available for
  freelance work · Kaduna, Nigeria" text, if you want to change your
  availability wording.
- **About text** — `src/components/About.jsx`, if you want to adjust the copy.

## 5. Where to add project images

Drop real screenshots into `public/projects/` (any `.jpg`, `.png`, or `.svg`),
then point to them from `src/data/projects.js` by updating each project's
`image` field, e.g.:

```js
image: '/projects/dr-apple-cover.jpg',
```

Two placeholder SVGs are included so the page never shows a broken image
before you add real ones — swap them out when you have screenshots.

## 6. Where to add project links

Also in `src/data/projects.js`, each project has `demoUrl` and `codeUrl`.
Leave either as `''` to hide that button on the card, or fill them in:

```js
demoUrl: 'https://your-live-demo.com',
codeUrl: 'https://github.com/your-username/your-repo',
```

To add more projects, copy one of the existing objects in the `projects`
array and fill in your own `name`, `description`, `stack`, `features`, and
`image`. Set `featured: true` on at most one project at a time — it renders
larger, and the layout is tuned for a single featured card.

## 7. How to deploy

Build the production files:

```bash
npm run build
```

This outputs a static site into `dist/`. Deploy that folder to any static
host:

- **Vercel** — `npm i -g vercel`, then run `vercel` from this folder (auto
  detects Vite).
- **Netlify** — drag-and-drop the `dist/` folder onto
  [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo
  and set build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — push this project to a GitHub repo, then use the
  `gh-pages` package or GitHub Actions to publish the `dist/` folder.
- **Railway** — since you're already using Railway for Dr Apple, you can
  deploy this as a static site there too (serve the `dist/` folder, or use a
  simple static buildpack).

## Notes on the design

- Dark navy/black theme with a single blue accent, per the brief — the teal
  "signal" color is used only for live/status indicators (the availability
  dot, timeline dates) to reinforce the connectivity/IT thread running
  through the services.
- The hero's visual is a small animated network diagram (Web / Mobile /
  Cloud / Network / Support nodes orbiting a central "YT" node) instead of a
  developer illustration or dashboard mockup — it doubles as a map of your
  service categories.
- Typefaces: Space Grotesk (headings), Inter (body), JetBrains Mono (labels,
  stats, code-style details) — loaded from Google Fonts in `index.html`.
- Respects `prefers-reduced-motion` throughout (scroll-reveal and the hero
  node pulse both turn off).
