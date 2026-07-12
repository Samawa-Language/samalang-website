---
title: Panduan Instalasi
description: Cara menginstal SamaLang di sistem Anda
---

## Cara Menginstal SamaLang

Pilih metode instalasi yang paling sesuai dengan kebutuhan Anda. Cara tercepat adalah menggunakan NPM, tetapi Anda juga bisa melakukan instalasi manual dengan mengklon langsung dari repository resmi kami.

Pastikan Anda memiliki **Node.js** terinstal di sistem Anda sebelum memulai proses instalasi via NPM.

### Instal Compiler via NPM (Disarankan)

```bash
npm i -g samalang-compiler
```

Setelah instalasi, Anda bisa menjalankan file SamaLang langsung:

```bash
sl filename.sl
```

### Clone dari Repository

```bash
git clone https://github.com/Samawa-Language/samawa-language.git
cd samawa-language
./install.sh install
```

Ini akan membuat symlink binary `sl` ke `/usr/local/bin/sl`.

### Uninstal

```bash
./install.sh uninstall
```
