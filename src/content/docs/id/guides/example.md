---
title: Panduan Instalasi
description: Cara menginstal SamaLang di sistem Anda
---

## Cara Menginstal SamaLang

Pilih metode instalasi yang paling sesuai dengan kebutuhan Anda.

### Instal via NPM (Disarankan)

Membutuhkan [Node.js](https://nodejs.org/) >= 18.

```bash
npm install -g samalang
```

Setelah instalasi, pastikan berjalan dengan benar:

```bash
sl --version
sl --help
```

### Instal via curl (Linux / macOS)

Satu baris perintah — otomatis mendeteksi OS dan arsitektur:

```bash
curl -fsSL https://raw.githubusercontent.com/Samawa-Language/samawa-language/main/install.sh | bash
```

### Instal via PowerShell (Windows)

```powershell
irm https://raw.githubusercontent.com/Samawa-Language/samawa-language/main/install.ps1 | iex
```

### Instal dari Source

```bash
git clone https://github.com/Samawa-Language/samawa-language.git
cd samawa-language
npm install
npm link
```

## Penggunaan

```bash
sl run main.sl              # Transpile dan eksekusi
sl transpile main.sl        # Hanya transpile ke Lua
sl transpile main.sl -o out.lua  # Simpan hasil transpile ke file
sl watch main.sl            # Auto-recompile saat file berubah
sl --help                   # Tampilkan semua opsi
```

## Uninstal

```bash
# NPM
npm uninstall -g samalang

# curl installer (Linux/macOS)
curl -fsSL https://raw.githubusercontent.com/Samawa-Language/samawa-language/main/install.sh | bash -s -- uninstall

# PowerShell (Windows)
Remove-Item "$env:USERPROFILE\.samalang" -Recurse -Force
npm uninstall -g samalang
```

## Dukungan Editor

Instal syntax highlighting untuk editor Anda:

- **VS Code**: Cari "Samawa-Language" di Extensions, atau install `.vsix` dari [GitHub Releases](https://github.com/Samawa-Language/samawa-language/releases)
- **Zed**: Cari "Samalang" di Extensions
