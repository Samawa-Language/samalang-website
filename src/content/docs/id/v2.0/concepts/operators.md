---
title: Operator
description: Operator aritmatika, perbandingan, logika, dan string di Samalang v2.0
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

Samalang mendukung semua operator Lua. Karena transpiler hanya mengganti kata kunci, operator berfungsi persis seperti di Lua.

## Operator Aritmatika

| Operator | Deskripsi | Contoh |
|----------|-----------|--------|
| `+` | Penjumlahan | `3 + 2` → `5` |
| `-` | Pengurangan | `10 - 4` → `6` |
| `*` | Perkalian | `5 * 3` → `15` |
| `/` | Pembagian | `10 / 3` → `3.333...` |
| `%` | Modulo | `10 % 3` → `1` |
| `^` | Eksponen | `2 ^ 3` → `8` |

```sl
ada hasil = (10 + 5) * 2
tulis(hasil) -- Output: 30

ada sisa = 17 % 5
tulis(sisa) -- Output: 2
```

## Operator Perbandingan

| Operator | Deskripsi |
|----------|-----------|
| `==` | Sama dengan |
| `~=` | Tidak sama dengan |
| `>` | Lebih besar dari |
| `<` | Lebih kecil dari |
| `>=` | Lebih besar atau sama dengan |
| `<=` | Lebih kecil atau sama dengan |

```sl
ada umur = 20

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
```

:::note
Samalang menggunakan `~=` untuk "tidak sama dengan" (sama seperti Lua). Ini berbeda dari banyak bahasa lain yang menggunakan `!=`.
:::

## Operator Logika

| Operator | Deskripsi | Setara Lua |
|----------|-----------|------------|
| `no` | Logika NOT | `not` |
| `dan` | Logika AND | `and` |
| `atau` | Logika OR | `or` |

```sl
ada x = tutu
ada y = siong

lamen no y tres
    tulis("y adalah siong") -- Ini dijalankan
jure_mo

lamen x dan y tres
    tulis("Keduanya benar") -- Ini TIDAK dijalankan
jure_mo

lamen x atau y tres
    tulis("Salah satu benar") -- Ini dijalankan
jure_mo
```

## Penggabungan String

Gunakan `..` untuk menggabungkan string:

```sl
ada nama = "Sama"
ada versi = "Lang"
ada gabung = nama .. versi
tulis(gabung) -- Output: Samalang
```

## Operator Panjang

Gunakan `#` untuk mendapatkan panjang string atau tabel:

```sl
ada teks = "Samalang"
tulis(#teks) -- Output: 8

ada buah = {"apel", "mangga", "jeruk"}
tulis(#buah) -- Output: 3
```

## Urutan Prioritas Operator

Dari prioritas tertinggi ke terendah:

1. `^` (eksponen)
2. `#`, `-` unary, `no` (NOT)
3. `*`, `/`, `%`
4. `+`, `-`
5. `..` (penggabungan)
6. `<`, `>`, `<=`, `>=`, `~=`, `==`
7. `dan`
8. `atau`
