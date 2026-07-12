---
title: Referensi Lua
description: Referensi teknis untuk engine Lua yang menjadi dasar SamaLang
---

SamaLang didukung oleh **Lua 5.4**, salah satu bahasa scripting tercepat dan paling efisien yang tersedia. Karena SamaLang ditranspile langsung ke Lua, Anda memiliki akses penuh ke standard library dan ekosistem Lua.

## Kompatibilitas Lua

SamaLang kompatibel penuh dengan **Lua 5.4**. Semua kode Lua bisa dicampur dengan sintaks SamaLang.

## Standard Library

Fungsi-fungsi berikut dari standard library Lua tersedia di SamaLang:

### Fungsi Table

| Fungsi | Deskripsi |
|--------|-----------|
| `table.insert(t, [pos], nilai)` | Sisipkan nilai di posisi |
| `table.remove(t, [pos])` | Hapus nilai di posisi |
| `table.sort(t, [comp])` | Urutkan elemen tabel |
| `table.concat(t, [sep])` | Gabungkan elemen tabel |

### Fungsi String

| Fungsi | Deskripsi |
|--------|-----------|
| `string.len(s)` | Dapatkan panjang string |
| `string.upper(s)` | Konversi ke huruf besar |
| `string.lower(s)` | Konversi ke huruf kecil |
| `string.sub(s, i, j)` | Ekstrak substring |
| `string.find(s, pola)` | Cari kecocokan pola |
| `string.format(fmt, ...)` | Format string |

### Fungsi Math

| Fungsi | Deskripsi |
|--------|-----------|
| `math.abs(x)` | Nilai absolut |
| `math.ceil(x)` | Pembulatan ke atas |
| `math.floor(x)` | Pembulatan ke bawah |
| `math.max(...)` | Nilai maksimum |
| `math.min(...)` | Nilai minimum |
| `math.random([m, n])` | Angka acak |

## Pelajari Lebih Lanjut

- [Lua 5.4 Reference Manual](https://www.lua.org/manual/5.4/)
- [Programming in Lua (Buku)](https://www.lua.org/pil/)
- [Lua Demo](https://www.lua.org/demo.html)
