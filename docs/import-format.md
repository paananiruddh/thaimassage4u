# CSV and JSON Import Format

## CSV
Use `data/listings-template.csv`.
- One row per listing.
- Keep IDs unique.
- Use lowercase kebab-case for `slug` and `suburb`.
- Use semicolon-separated values for `tags`.

## JSON
Use `data/listings-template.json`.
- `data/listings.json` is the live static source.
- Keep field names identical to the data dictionary.
- Keep dates in `YYYY-MM-DD` format.
