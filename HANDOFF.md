# HANDOFF — {{worktree name}}

> Per-worktree state. Update before every `/clear`. Resume prompt reads this first.

## State

{{one sentence — what just shipped, where we are}}

## Next

{{one sentence — concrete next slice/task}}

## Blocked on

{{anything waiting on external input, decision, or other work. Delete if nothing.}}

## Recent decisions

{{bullet list of non-obvious choices made this session that future-Claude needs to know}}

## Resume prompt

```
Read HANDOFF + CLAUDE.md + `git log -10`. Report state. Begin the next slice without asking which one.
```
