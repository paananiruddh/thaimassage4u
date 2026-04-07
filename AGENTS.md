# AGENTS.md

## Cursor Cloud specific instructions

This is a static HTML/CSS/JS website (Thai Massage For U) with zero npm/pip dependencies. There is no build step, no framework, no backend, and no database.

### Running the dev server

Serve the site locally with any static file server:

```bash
npx serve -l 8080 /workspace
```

Then open `http://localhost:8080` in a browser. All pages are plain `.html` files in the repo root.

### Project structure

- All HTML pages are in the repo root (`index.html`, `contact.html`, etc.)
- Single stylesheet: `styles.css`
- Single JS file: `script.js` (handles contact form `mailto:` link generation)
- `CNAME` file targets GitHub Pages deployment at `thaimassageforu.com`

### Lint / Test / Build

- **Lint**: No linter is configured. You can optionally validate HTML with an external tool (e.g. `npx html-validate *.html`) but it is not part of the repo's tooling.
- **Tests**: No automated tests exist.
- **Build**: No build step required — files are served as-is.

### Gotchas

- `npx serve` uses clean URLs by default, so `contact.html` redirects to `/contact` (HTTP 301 then 200). This is normal.
- The contact form opens a `mailto:` link on submit — it does not POST to a server.
- Images are loaded from external Unsplash CDN URLs; they require internet access.
