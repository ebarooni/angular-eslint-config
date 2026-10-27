# Commit message format

```
<type>(<scope>): <subject>

<body>

<footer>

Co-authored-by: Ehsan Barooni <66495214+ebarooni@users.noreply.github.com>
```

- Type: `feat`, `fix`, `refactor`, `perf`, `test`, `docs`, or `chore`. Add `!` after the type or the scope when the change breaks callers.
- Scope from the touched paths: `test/**` → `test`. Omit the scope for the shared config (`src/**`), package metadata, docs, or a change that spans several areas.
- Version bump: its own commit, `chore: raise version to X.Y.Z`.
- Subject: imperative, lowercase start, no trailing period, at most 72 characters.
- Body (optional): why, and how behavior differs from before. Wrap at 72 characters.
- Footer (optional): `BREAKING CHANGE: <what changed, what callers must do>`.
- End with one empty line, then exactly this trailer. Do not add any other `Co-authored-by` line. Do not use `barooni.eh@gmail.com` or `mail@barooni.dev`. Write the trailer yourself. If it is missing, the commit hook adds the wrong email.

`Co-authored-by: Ehsan Barooni <66495214+ebarooni@users.noreply.github.com>`
