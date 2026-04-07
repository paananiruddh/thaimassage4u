# AGENTS.md — thaimassage4u

## Mission
Improve the `thaimassage4u` website with high-quality, original, genuinely useful content and professional design improvements, while preserving GitHub Pages compatibility and avoiding any changes that could interfere with an active Google AdSense review.

## Repository + branch rules
- Work ONLY in the `localau` branch.
- Never switch the GitHub Pages publishing source to `localau`.
- Never merge to the live or publishing branch.
- Never deploy automatically.
- Never create or modify PR automations for deployment.
- Show a concise plan before major edits.
- Edit the minimum necessary files.
- At the end of each task, provide:
  1. files changed
  2. why each file changed
  3. risks or follow-ups
  4. suggested commit message

## Hard freeze during AdSense review
Do NOT create, edit, move, delete, or rename any of the following unless explicitly instructed after review is complete:
- `ads.txt`
- `CNAME`
- `robots.txt`
- `sitemap.xml`
- privacy policy files
- cookie notice files
- Google site verification files or meta tags
- AdSense script or snippet placement
- canonical tags on live pages
- `.github/workflows/*`
- deployment config
- DNS instructions or domain config docs

If a requested change would touch any frozen file, stop and say:
`BLOCKED: This change touches a frozen AdSense-review or publishing artifact.`

## Hosting constraints: GitHub Pages only
- Output must remain compatible with GitHub Pages static hosting.
- No server-side code.
- No PHP, Python, Ruby, Node server runtime, login system, database calls, or API routes required for page rendering.
- Prefer plain HTML, CSS, and JavaScript or static-site output.
- Preserve or add `.nojekyll` if the site is not intentionally using Jekyll.
- Use static-compatible forms only. If a real backend is needed, leave a placeholder and explain the requirement rather than inventing a backend.
- Avoid absolute root paths unless confirmed safe for the current custom-domain setup.
- Prefer relative asset paths or a single configurable base-path pattern.

## Content standards
- Content must feel real, local, and written for humans.
- No generic AI filler.
- No copied or lightly reworded content from competitors.
- No fabricated testimonials, practitioner names, credentials, prices, addresses, awards, or opening hours.
- No invented suburb-specific facts.
- If a fact is missing, insert `[NEEDS INPUT]` instead of guessing.
- Every page must have a clear purpose and unique substance.
- Every suburb page must contain materially distinct content, not a spun template.

## AdSense + policy safety
- Keep wording professional, wellness-oriented, and non-sexual.
- Do NOT use words or framing that imply erotic, sensual, intimate, escort-like, or compensated sexual services.
- Do NOT use sexualized imagery or suggestive copy.
- Do NOT make medical or therapeutic outcome guarantees.
- Do NOT make exaggerated “best in Melbourne” style claims unless supported by verifiable evidence.
- Keep pages useful before monetized.

## SEO + UX standards
- One clear H1 per page.
- Strong title tag and meta description for each page.
- Clean internal linking.
- Descriptive anchors, not keyword stuffing.
- Add FAQ sections only when genuinely useful.
- Use schema only when supported by page content.
- No doorway pages.
- No thin pages created just to rank or host ads.
- Keep navigation obvious and consistent.

## Workflow
For each substantial task:
1. Inspect relevant files first.
2. Explain the intended change briefly.
3. Make changes in small, reviewable steps.
4. Preserve good existing content.
5. Remove placeholder or templated filler.
6. Prefer improvement over wholesale rewrite unless asked.
7. Do not touch frozen files.
8. Do not publish.
