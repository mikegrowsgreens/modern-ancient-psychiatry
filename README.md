# claude-base

Mike's project starter. Clone via GitHub template, point Superset.sh at it, go.

## Use

```bash
gh repo create my-thing --template mikegrowsgreens/claude-base --private --clone
cd my-thing
```

Then open in Superset.sh and start working.

## What's inside

- `CLAUDE.md` — project-level instructions skeleton (extends global `~/.claude/CLAUDE.md`)
- `HANDOFF.md` — per-worktree state file (update before `/clear`)
- `.claude/` — project-local skill/setting overrides
- `.env.example` — copy to `.env.local`, fill in secrets
- `docs/` — project docs live here

## Stack defaults

MGG stack unless overridden: Next.js + Postgres + Tailwind + n8n. Scaffold with whatever the project needs — this template stays lean on purpose.
