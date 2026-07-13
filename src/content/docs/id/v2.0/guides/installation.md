---
title: Instalasi
description: Cara memasang Samalang v2.0 di editor dan sistem Anda
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

Panduan ini akan membantu Anda memasang Samalang v2.0 dan menyiapkan lingkungan pengembangan.

## Prasyarat

- **Lua** versi 5.1 atau yang lebih baru (termasuk LuaJIT)
- **Node.js** (untuk transpiler Samalang)
- Editor kode (VS Code atau Zed direkomendasikan)

## Instalasi Transpiler

```bash
npm install -g samawa-language
```

## Verifikasi Instalasi

```bash
samalang --version
```

## Editor Support

### VS Code

1. Buka VS Code
2. Buka Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Ketik "Extensions: Install Extensions"
4. Cari **Samalang**
5. Klik **Install**

### Zed

1. Buka Zed
2. Buka Command Palette (`Ctrl+Shift+P`)
3. Ketik "Extensions"
4. Cari **Samalang**
5. Klik **Install**

## Contoh Program Pertama

Buat file `hello.sl`:

```sl
# Program pertama saya di Samalang
tulis("Halo, Samawa!")

ada nama = "Dunia"
tulis("Selamat datang, " .. nama .. "!")
```

Jalankan dengan:

```bash
samalang hello.sl
```

## Struktur Proyek

```
proyek-samalang/
├── src/
│   ├── main.sl
│   └── lib/
│       └── utils.sl
├── bin/
└── samalang.json
```

## Selanjutnya

Setelah instalasi selesai, lanjutkan ke [Mulai Belajar](/id/v2.0/guides/get-started/) untuk memahami dasar-dasar Samalang.
