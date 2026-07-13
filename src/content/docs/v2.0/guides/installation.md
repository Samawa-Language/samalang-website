---
title: Installation
description: Install SamaLang v2.0 — set up your development environment
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v2.0**. For the latest version, visit the [current documentation](/).
:::

Install SamaLang v2.0 and start writing code with Samawa keywords in minutes.

## Prerequisites

- **Node.js** 14 or higher
- **npm** (comes with Node.js)

## Install via npm

```bash
npm install -g samalang
```

Verify the installation:

```bash
samalang --version
```

## Editor Support

SamaLang has extensions for popular editors:

### VS Code

Install the **SamaLang** extension from the VS Code Marketplace for syntax highlighting and language support.

### Zed

Install the **SamaLang** extension from the Zed extensions panel for syntax highlighting and language support.

## Create Your First File

1. Create a new file with the `.sl` extension:

```sl
# my_first_program.sl
tulis("Salam Sarea!")
```

2. Run it:

```bash
samalang my_first_program.sl
```

Output:

```
Salam Sarea!
```

## Project Structure

A typical SamaLang project:

```
my-project/
├── main.sl          # Entry point
├── lib/
│   ├── utils.sl     # Utility functions
│   └── data.sl      # Data handling
└── package.json     # Project metadata
```

---

## Next Steps

<CardGrid>
  <LinkCard
    title="Get Started"
    description="Write your first SamaLang program."
    href="/v2.0/guides/get-started/"
  />
  <LinkCard
    title="Syntax Reference"
    description="All 21 Samawa keywords with examples."
    href="/v2.0/syntax/ada"
  />
</CardGrid>
