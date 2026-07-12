---
title: Dukungan VSCode
description: Dukungan SamaLang untuk Visual Studio Code
---

## Description / Deskripsi

Samalang menyediakan dukungan syntax highlighting untuk Visual Studio Code menggunakan ekstensi kustom.
Ini memungkinkan file `.sl` dikenali dengan warna yang proper dan fitur bahasa dasar.

## Instalasi

1. Buka Visual Studio Code
2. Buka Extensions (`Ctrl + Shift + X`)
3. Cari `Samawa-Language`
4. Klik **Install**

### Instalasi Manual

```bash
git clone https://github.com/Samawa-Language/samalang-vscode-extension.git
```

Buka folder yang sudah di-clone di VS Code dan tekan `F5` untuk meluncurkan extension development host.

## Fitur

- Syntax highlighting untuk semua kata kunci SamaLang
- Auto-closing bracket dan quote
- Code snippet untuk pola umum (`ada`, `fungsi`, `lamen`, dll.)
