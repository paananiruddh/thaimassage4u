# Install these files into `thaimassage4u`

## Put these files into the repository root
- `AGENTS.md`
- `content-pack-template.md`
- `cursor-prompts.md`
- `cursor-master-instruction-pack.txt`

## Put these files into `.cursor/rules/`
- `00-repo-scope.mdc`
- `10-adsense-freeze.mdc`
- `20-content-quality.mdc`
- `30-github-pages-compatibility.mdc`

## Recommended use order
1. Copy all files into the repo.
2. Commit them on branch `localau`.
3. Open Cursor in the repo.
4. Paste `cursor-master-instruction-pack.txt` into Cursor chat.
5. Run prompt 1 from `cursor-prompts.md`.
6. Fill out `content-pack-template.md` before large rewrites.

## Suggested commit message
`add cursor rules and content operating pack for localau`
