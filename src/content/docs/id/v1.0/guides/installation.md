---
title: Instalasi
description: Instalasi dan pengaturan Samalang di Zed
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Instalasi via Zed Extension

### Langkah 1: Buka Zed

Buka aplikasi **Zed** di sistem Anda.

### Langkah 2: Buka Panel Ekstensi

- Tekan `Ctrl+Shift+X` (atau `Cmd+Shift+X` di macOS)
- Atau buka menu **Zed → Extensions → Install Extensions**

### Langkah 3: Cari "Samalang"

Di panel ekstensi, ketik **Samalang** pada kolom pencarian.

### Langkah 4: Instal

Klik tombol **Install** pada ekstensi Samalang.

### Langkah 5: Verifikasi

Buat file baru dengan ekstensi `.sl` dan pastikan Zed mengenali sintaks Samalang.

## Instalasi Manual

Jika Anda ingin menginstal secara manual dari repositori:

### Langkah 1: Clone Repositori

```bash
git clone https://github.com/rzfann/samalang-zed-extension.git
```

### Langkah 2: Buka di Zed

```bash
cd samalang-zed-extension
zed .
```

### Langkah 3: Pasang Ekstensi

Di Zed, buka **Zed → Dev → Install Dev Extension** dan pilih folder repositori.

## Struktur Proyek

Setelah instalasi, struktur proyek ekstensi Anda akan terlihat seperti ini:

```
samalang-zed-extension/
├── src/
│   └── ...
├── package.json
├── extension.toml
└── ...
```

## Persyaratan Sistem

| Komponen | Persyaratan |
|----------|------------|
| Zed | Versi terbaru (stable) |
| Node.js | v18 atau lebih baru |
| npm | v9 atau lebih baru |

## Pemecahan Masalah

### Ekstensi Tidak Muncul

- Pastikan Zed sudah diperbarui ke versi terbaru
- Muat ulang Zed setelah instalasi
- Periksa log ekstensi di **Zed → Dev → Show Extensions Log**

### Syntax Highlighting Tidak Berfungsi

- Pastikan file menggunakan ekstensi `.sl`
- Muat ulang jendela Zed dengan `Ctrl+Shift+P` → `Reload Window`

### Error Saat Menjalankan

- Periksa apakah Node.js sudah terinstal dengan benar
- Jalankan `node --version` untuk memverifikasi
