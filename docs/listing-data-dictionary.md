# Listing Data Dictionary

| Field | Type | Required | Allowed values / format | Notes |
|---|---|---|---|---|
| id | string | yes | `listing-001` pattern | Unique stable listing identifier |
| name | string | yes | plain text | Business display name |
| slug | string | yes | lowercase kebab-case | URL-safe key |
| city | string | yes | `melbourne` or `sydney` | Filter field |
| suburb | string | yes | lowercase kebab-case | e.g. `south-yarra` |
| category | string | yes | `relaxation`, `deep-tissue`, `blended`, `remedial`, `sports` | Single category per record |
| price_band | string | no | `$`, `$$`, `$$$`, `$$$$`, `unspecified` | Use `unspecified` if unknown |
| booking_style | string | yes | `sms-email`, `phone-call`, `online-form`, `online-booking`, `walk-in-enquiry` | Primary booking path |
| phone | string | no | E.164 recommended | Business phone |
| email | string | no | valid email | Business contact email |
| website_url | string | yes | full URL | Primary verification source |
| address_summary | string | no | text | Keep concise |
| hours_summary | string | no | text | e.g. `Mon-Fri 9am-6pm` |
| description_short | string | yes | plain text | 1–2 sentence factual summary |
| tags | string/array | no | semicolon CSV or JSON array | Optional descriptors |
| claim_status | string | yes | `unclaimed`, `claimed`, `owner-verified` | Admin status |
| source_url | string | yes | full URL | Where facts were verified |
| source_checked_date | string | yes | `YYYY-MM-DD` | Verification date |
| notes_internal | string | no | text | Internal notes |

## Validation checklist
- `city` must be `melbourne` or `sydney`.
- `suburb` and `slug` must be lowercase kebab-case.
- `category` must match one allowed value exactly.
- `price_band` must be one of `$`, `$$`, `$$$`, `$$$$`, `unspecified`.
- `booking_style` must match one allowed value exactly.
- `source_url` and `source_checked_date` are mandatory for publication.
- If uncertain, leave field blank or use `unspecified` where permitted.

## Content safety standards
- Keep descriptions factual and wellness-oriented.
- Avoid suggestive or ambiguous language.
- Do not include medical guarantees or unsupported outcomes.
- Do not fabricate listing details, addresses, hours, or credentials.
