---
title: Installation Guide
description: How to install SamaLang on your system
---

## How to Install SamaLang

Choose the installation method that best suits your needs. The fastest way is using NPM, but you can also perform a manual installation by cloning directly from our official repository.

Make sure you have **Node.js** installed on your system before starting the installation process via NPM.

### Install Compiler via NPM (Recommended)

```bash
npm i -g samalang-compiler
```

After installation, you can run SamaLang files directly:

```bash
sl filename.sl
```

### Clone from Repository

```bash
git clone https://github.com/Samawa-Language/samawa-language.git
cd samawa-language
./install.sh install
```

This will symlink the `sl` binary to `/usr/local/bin/sl`.

### Uninstall

```bash
./install.sh uninstall
```
