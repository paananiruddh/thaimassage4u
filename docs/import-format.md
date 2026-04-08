# CSV and JSON Import Format

Use this guide to populate the static directory without adding unverified data.

## Canonical source files
- CSV template: `data/listings-template.csv`
- JSON template: `data/listings-template.json`
- Live static source: `data/listings.json`
- Field rules: `docs/listing-data-dictionary.md`

## CSV workflow (manual research)
1. Duplicate `data/listings-template.csv`.
2. Add one row per listing.
3. Keep `id` unique and stable (example: `listing-021`).
4. Use lowercase kebab-case for `slug` and `suburb`.
5. Use semicolon-separated values for `tags`.
6. Leave unknown fields blank or mark as `unspecified` where allowed.
7. Record `source_url` and `source_checked_date` for each row.

## JSON workflow (publish-ready)
1. Validate CSV values against the data dictionary.
2. Convert rows into JSON objects with exact field names.
3. Place objects under the `listings` array in `data/listings.json`.
4. Keep dates in `YYYY-MM-DD` format.
5. Do not add fields outside the dictionary unless schema updates are documented.

## Owner-submitted update handling
- Owner requests should still be verified against official website sources.
- If owner details cannot be verified, keep fields blank and mark internal notes with `[NEEDS INPUT]`.
- Do not publish copied review text, star ratings, or unsupported claims.
