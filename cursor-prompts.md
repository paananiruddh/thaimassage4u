# Cursor prompts for thaimassage4u (`localau` only)

## 1) Safe repo audit
```text
Read AGENTS.md first and obey it.

Audit this repository on branch `localau` for:
1. site structure
2. current GitHub Pages deployment assumptions
3. files that are frozen due to active AdSense review
4. content quality issues
5. template/filler text
6. pages that are thin, duplicate-feeling, or weak for AdSense
7. SEO and UX quick wins
8. any GitHub Pages incompatibilities

Do not edit anything yet.

Return:
- a concise repo map
- a freeze list
- a risk list
- the top 15 highest-value changes that are safe to do in `localau`
```

## 2) GitHub Pages compatibility pass
```text
Read AGENTS.md first and obey it.

Inspect the repo for GitHub Pages compatibility only.
Check:
- static-only compatibility
- asset paths
- relative vs root paths
- `.nojekyll` needs
- broken links
- image path risks
- forms that require a backend
- code that would fail on GitHub Pages

Do not touch frozen files.
Do not deploy.

Return:
- exact issues found
- file-level fixes needed
- a safe implementation plan for `localau`
```

## 3) Real-content gap analysis
```text
Read AGENTS.md first and obey it.

Review all existing content and identify:
- generic AI-sounding copy
- filler language
- weak headings
- low-trust sections
- pages that do not feel locally grounded
- pages that are too similar to each other
- pages that would likely underperform for AdSense due to thinness or lack of originality

Do not edit yet.

Return a prioritized rewrite plan for:
- homepage
- service pages
- suburb pages
- about page
- contact page
- blog/article section
```

## 4) Homepage rewrite
```text
Read AGENTS.md first and obey it.

Rewrite the homepage content only, using the existing repo structure unless there is a clear UX reason to improve it.

Requirements:
- professional and calm
- clearly wellness-oriented and non-sexual
- no generic filler
- useful, credible copy
- strong hero, trust section, services overview, FAQs, and clear CTAs
- better H1/H2 structure
- strong meta title and meta description
- preserve GitHub Pages compatibility
- do not touch frozen files

If facts are missing, use [NEEDS INPUT].

Show the proposed content structure first, then implement.
```

## 5) Service pages rewrite
```text
Read AGENTS.md first and obey it.

Identify the core service pages and rewrite them for originality and usefulness.

For each service page:
- explain what the service is in plain language
- who it suits
- what a session typically involves
- practical expectations
- FAQs
- internal links to related services and location pages
- professional, non-medical, non-exaggerated language

Avoid:
- duplicated wording across service pages
- medical guarantees
- sensual or suggestive phrasing
- fake credentials or fake proof

Work only on `localau`.
```

## 6) Suburb page framework before mass edits
```text
Read AGENTS.md first and obey it.

Do not mass-generate suburb pages yet.

First, design a suburb-page framework that avoids thin or duplicated content.
Create a reusable structure with distinct sections such as:
- why people in this suburb search for this service
- practical access / convenience angle
- service fit by audience / schedule / lifestyle
- nearby context
- FAQs
- internal links

Return:
- the recommended section template
- the rules that make each suburb page materially unique
- which current suburb pages are salvageable vs should be rewritten later
```

## 7) About/contact trust upgrade
```text
Read AGENTS.md first and obey it.

Improve the About and Contact pages for trust and clarity without inventing facts.

Goals:
- remove placeholder language
- improve professionalism
- make the site feel human and credible
- make contact information easy to find
- improve conversion flow
- keep wording AdSense-safe and policy-safe

Use [NEEDS INPUT] where trust facts are missing.
Do not touch frozen files.
```

## 8) Blog strategy for genuine content
```text
Read AGENTS.md first and obey it.

Create a blog/content strategy for this site that is genuinely useful and AdSense-compatible.

Return:
- 20 article titles
- target reader for each
- search intent
- what original angle each article needs
- which service/location pages each article should link to
- which articles are safe to write now using existing facts
- which articles require additional real-world input before writing
```

## 9) Write first 5 articles properly
```text
Read AGENTS.md first and obey it.

Write the first 5 blog posts that can be supported by existing facts in the repo/content pack.

Requirements:
- each article must be genuinely useful
- avoid fluff and repeated phrasing
- no scraped or derivative feel
- include practical detail and clear structure
- include internal links
- include a soft CTA
- add FAQ schema only if fully supported by the page content
- keep tone calm, credible, and specific

If a post cannot be written honestly from available facts, skip it and explain why.
```

## 10) Internal linking and navigation
```text
Read AGENTS.md first and obey it.

Improve internal linking across the site without keyword stuffing.

Focus on:
- homepage to core services
- services to suburbs
- blog to service pages
- related services to each other
- footer and nav improvements
- anchor text that sounds natural

Return the internal linking map first, then implement.
```

## 11) SEO cleanup without touching review-sensitive infrastructure
```text
Read AGENTS.md first and obey it.

Improve on-page SEO only in safe files.

Focus on:
- title tags
- meta descriptions
- H1/H2 structure
- alt text
- semantic HTML
- content hierarchy
- duplicate heading cleanup
- thin section expansion

Do not touch:
- robots.txt
- sitemap.xml
- canonicals on live/frozen pages
- ads.txt
- CNAME
- deployment/workflow files
```

## 12) Final QA on `localau`
```text
Read AGENTS.md first and obey it.

Run a final QA review of all safe changes in `localau`.

Check:
- broken links
- missing images
- bad spacing
- inconsistent headings
- duplicated paragraphs
- policy-risk language
- GitHub Pages compatibility risks
- pages that still feel generic
- pages still needing real facts

Return:
- files changed
- remaining blockers
- recommended commit groups
- a post-AdSense-review merge plan
```
