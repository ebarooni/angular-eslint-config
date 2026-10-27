---
name: generate-commit-message
description: >
  Use before any git commit, including commit-and-push and PR updates. Drafts a
  conventional commit message, proposes a split when staged changes are not
  cohesive, and waits for confirmation before committing.
metadata:
  version: "1.0"
---

# Generate Commit Message

1. Run `git diff --cached`. If it is empty, ask the user to stage changes.
2. If the changes are not cohesive, propose a split (commits, messages, files or hunks for each) and stop.
3. Draft the message with [references/normal-commit.md](references/normal-commit.md).
4. For a revert, use `revert: <exact header of the reverted commit>`, a blank line, then `This reverts commit <hash>.` End with the same trailer as a normal commit.
5. Show the draft. Run `git commit` only when the user asks.
