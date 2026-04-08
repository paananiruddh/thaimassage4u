# CSV and JSON Import Format

Use this guide to populate the static Melbourne + Sydney directory quickly while keeping every field verifiable.

## Canonical source files
- CSV template: `data/listings-template.csv`
- JSON template: `data/listings-template.json`
- Live static source: `data/listings.json`
- Listing stubs: `data/listing-templates/listing-001.json` to `listing-020.json`
- Field rules: `docs/listing-data-dictionary.md`

## Quick intake sequence
1. Start in `data/listings-template.csv` for manual research notes.
2. Verify details from official business websites before publish.
3. Convert validated rows to JSON objects in `data/listings.json`.
4. Keep missing facts as blank or `[NEEDS INPUT]` (no guessing).

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
2. Convert rows into JSON objects using exact field names from the template.
3. Place objects under the `listings` array in `data/listings.json`.
4. Keep dates in `YYYY-MM-DD` format.
5. Do not add fields outside the dictionary unless schema updates are documented.

## Owner-submitted update handling
- Owner requests still require verification from official business sources.
- If owner details cannot be verified, keep publish fields blank and note `[NEEDS INPUT]` in `notes_internal`.
- Do not publish copied review text, star ratings, or unsupported claims.
- Do not add suggestive wording, medical guarantees, or promotional exaggerations.
