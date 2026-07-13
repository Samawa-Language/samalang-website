---
title: Installation Guide
description: How to install SamaLang on your system
---

## How to Install SamaLang

Choose the installation method that best suits your needs.

### Install via NPM (Recommended)

Requires [Node.js](https://nodejs.org/) >= 18.

```bash
npm install -g samalang
```

After installation, verify it works:

```bash
sl --version
sl --help
```

### Install via curl (Linux / macOS)

One-liner install — auto-detects your OS and architecture:

```bash
curl -fsSL https://raw.githubusercontent.com/Samawa-Language/samawa-language/main/install.sh | bash
```

### Install via PowerShell (Windows)

```powershell
irm https://raw.githubusercontent.com/Samawa-Language/samawa-language/main/install.ps1 | iex
```

### Install from Source

```bash
git clone https://github.com/Samawa-Language/samawa-language.git
cd samawa-language
npm install
npm link
```

## Usage

```bash
sl run main.sl              # Transpile and execute
sl transpile main.sl        # Transpile to Lua only
sl transpile main.sl -o out.lua  # Save transpiled Lua to file
sl watch main.sl            # Auto-recompile on file changes
sl --help                   # Show all options
```

## Uninstall

```bash
# NPM
npm uninstall -g samalang

# curl installer (Linux/macOS)
curl -fsSL https://raw.githubusercontent.com/Samawa-Language/samawa-language/main/install.sh | bash -s -- uninstall

# PowerShell (Windows)
Remove-Item "$env:USERPROFILE\.samalang" -Recurse -Force
npm uninstall -g samalang
```

## Editor Support

Install syntax highlighting for your editor:

- **VS Code**: Search "Samawa-Language" in Extensions, or install `.vsix` from [GitHub Releases](https://github.com/Samawa-Language/samawa-language/releases)
- **Zed**: Search "Samalang" in Extensions
