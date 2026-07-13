---
title: Installation
description: Install SamaLang v1.0 via npm and set up your development environment
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Install via npm

```bash
npm install -g samalang
```

This installs the `samalang` CLI globally on your system.

## Verify Installation

```bash
samalang --version
```

## Create Your First File

Create a file with the `.sl` extension:

```sl
# hello.sl
tulis("Salam Sarea!")
```

## Run Your Program

```bash
samalang hello.sl
```

Output:

```
Salam Sarea!
```

## Project Setup (Optional)

For project-based development:

```bash
mkdir my-project
cd my-project
npm init -y
npm install samalang
```

Run files with the local install:

```bash
npx samalang hello.sl
```

## Editor Support

SamaLang files (`.sl`) can be edited in any text editor. For syntax highlighting and language support, check the VS Code and Zed extensions in the editor support section.

## Next Steps

<CardGrid>
  <LinkCard
    title="Get Started"
    description="Write your first SamaLang program."
    href="/v10/guides/get-started/"
  />
  <LinkCard
    title="Syntax Reference"
    description="Learn all 11 SamaLang v1.0 keywords."
    href="/v10/syntax/ada"
  />
</CardGrid>
