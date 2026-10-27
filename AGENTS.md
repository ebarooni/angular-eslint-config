# AGENTS.md

Shared ESLint configuration for Angular. Setup and the public API are in [README.md](README.md).

## Conventions

- Prose and comments use ASD-STE100 Simplified Technical English. Use plain words, short sentences, and one idea per sentence.
- Comments say why, not what.
- Names state meaning. Do not use cryptic names (`d`, `m`, `bm`).
- Aim for about 250 lines or fewer in a hand-written file. Split only where the split follows the real structure.
- Every commit message ends with this trailer, after one empty line:
  `Co-authored-by: Ehsan Barooni <66495214+ebarooni@users.noreply.github.com>`
  Do not add any other `Co-authored-by` line. Do not use `barooni.eh@gmail.com` or `mail@barooni.dev`. Write the trailer yourself. If it is missing, the commit hook adds the wrong email.
- Ehsan reviews and merges every pull request. Do not merge, publish to npm, push tags, or trigger or dispatch CI.
- Before handoff, reply to or fix every review comment, including cursor[bot], and mark each thread resolved.
- A new skill starts at metadata version `1.0`. Bump that version once per pull request that changes a merged skill.

## This package

- Every pull request includes a package version bump. Use semver. Dropping an old major, or raising a peer minimum, is a major bump. Put the bump in its own commit: `chore: raise version to X.Y.Z`.
- Support only the current Angular major and the current TypeScript major. Today that is Angular 22 and TypeScript 6. Do not add support for older majors.
- Do not add rules that enforce a component or directive selector prefix.
- Ehsan prefers OnPush change detection. Do not relax `allowExplicitOnPush`.
- No workflow runs on a pull request. Run `npm run lint`, `npm run build`, and `npm run test` before handoff.
