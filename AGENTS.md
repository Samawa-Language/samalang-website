# AGENTS.md

## Project

SamaLang v2.0 documentation website. SamaLang is a Lua-based programming language using Samawa-language keywords. This repo is the **docs site only** (not the compiler/language). Deployed to Netlify at `samalang.netlify.app`.

## Stack

- **Astro v6** + **Starlight** (documentation framework)
- TypeScript, no framework components — content-only repo
- No lint, typecheck, test, or formatter configured

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build locally |

## Content structure

All docs live in `src/content/docs/` as `.md` files. Sections:

| Directory | Content |
|---|---|
| `guides/` | Getting started, installation |
| `concepts/` | Language fundamentals: data types, operators, tables, strings |
| `syntax/` | One page per Samawa keyword (18 pages) |
| `editor-support/` | VSCode and Zed extension info |
| `reference/` | Lua reference and API docs |

### Adding a new doc page

1. Create the `.md` file in the correct subdirectory under `src/content/docs/`
2. **Also** add it to the `sidebar` array in `astro.config.mjs` — sidebar is manually curated, not auto-generated (except the `reference` section which uses `autogenerate`)
3. Frontmatter requires `title` and `description`
4. Code blocks in syntax docs use `` ```bash `` as the language identifier

### Bilingual content

The site supports English (default) and Indonesian. Indonesian translations live in `src/content/docs/id/`. When adding or updating a page, create/update the Indonesian version as well.

## Key gotcha

**Sidebar is manually configured.** If you add or remove a doc file but forget to update the sidebar in `astro.config.mjs`, the page will exist but be unreachable from navigation.
