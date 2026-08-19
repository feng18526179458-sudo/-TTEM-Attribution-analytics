<!-- make-kit-guidelines -->

## Design System Setup — MANDATORY

This project depends on `@make-kits/keystone` packages. Before writing
any code:

1. Read guidelines/setup.md and guidelines/Guidelines.md by their exact
   path (e.g. node_modules/<scope>/<package>/guidelines/setup.md).
   This project uses pnpm, which symlinks packages — do NOT use
   `find`, `glob`, or `file_search` to discover files as they silently
   fail on symlinks. Instead use: reading files by exact path,
   `ls` (follows symlinks), `find -L` (`-L` follows symlinks), or `cat`.
2. Execute all setup instructions (install dependencies, config changes) against THIS project — not the package itself.
3. Do not skip, modify, or improvise any setup steps.
4. Read ALL other required .md files specified in guidelines/Guidelines.md.
5. Verify that all packages specified in setup.md appear in this project's package.json and that all required .md files have been read before proceeding.
<!-- /make-kit-guidelines -->

# System Guidelines - Keystone Design System

You are generating React UI for a **data-dense B2B console** UI built on the custom **Keystone** design system (TikTok / ByteDance).
Read the routing files first, then read the specific file for whatever you are about to build BEFORE you write code.

## STOP — Pre-Code Checklist (Complete ALL before writing ANY code)

Before writing a single line of code, you MUST complete this checklist:

[ ] 1. Read node_modules/@make-kits/keystone/guidelines/setup.md
[ ] 2. Read node_modules/@make-kits/keystone/guidelines/Guidelines.md
[ ] 3. Read node_modules/@make-kits/keystone/guidelines/tailwind.md
[ ] 4. Read component-specific docs for components you plan to use

If you write code before completing this checklist, you WILL make mistakes.

## Product character

This is a **data-dense B2B console** UI built on Keystone.
Default to clean, neutral surfaces with primary color reserved for key actions.

**IMPRORTANT MANDATORY READING:**
All documentation is found in the `@make-kits/keystone` package and that package alone should be referenced,

1. `node_modules/@make-kits/keystone/guidelines/Guidelines.md` — character, rules, workflows
2. `node_modules/@make-kits/keystone/guidelines/tailwind.md` → read BEFORE doing any styling
3. `node_modules/@make-kits/keystone/guidelines/components/overview.md` — the full catalog + alternative names
4. `node_modules/@make-kits/keystone/guidelines/figma-imports.md` — read BEFORE import any figma react code

**Read on demand:**

- `node_modules/@make-kits/keystone/components/{group}.md` — read BEFORE using a component from that group
- `node_modules/@make-kits/charts/overview.md` — read BEFORE building any chart
- `node_modules/@make-kits/icons/icon-discovery.md` — read BEFORE using any icon (do not guess icon names)