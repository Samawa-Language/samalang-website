---
title: String
description: Bekerja dengan string di SamaLang — pembuatan, penggabungan, dan operasi umum
---

String di SamaLang adalah urutan karakter, identik dengan string Lua.

## Membuat String

String diapit oleh tanda kutip ganda:

```bash
ada sapa = "Halo, Dunia!"
ada kosong = ""
```

## Penggabungan String

Gunakan `..` untuk menggabungkan string:

```bash
ada nama = "Sama"
ada versi = "Lang"
ada gabung = nama .. versi

tulis(gabung) -- Output: SamaLang
```

## Fungsi String Umum

| Fungsi | Deskripsi | Contoh |
|--------|-----------|--------|
| `string.len(s)` | Dapatkan panjang | `string.len("halo")` → `4` |
| `string.upper(s)` | Huruf besar | `string.upper("halo")` → `"HALO"` |
| `string.lower(s)` | Huruf kecil | `string.lower("HALO")` → `"halo"` |
| `string.sub(s, i, j)` | Ekstrak substring | `string.sub("halo", 1, 2)` → `"ha"` |
| `string.find(s, pola)` | Cari pola | `string.find("halo", "lo")` → `3, 4` |
| `string.rep(s, n)` | Ulangi string | `string.rep("ha", 3)` → `"hahaha"` |
| `string.reverse(s)` | Balik string | `string.reverse("halo")` → `"olah"` |
| `string.format(fmt, ...)` | Format string | `string.format("Umur: %d", 20)` |

```bash
ada nama = "samalang"

tulis(string.upper(nama)) -- Output: SAMALANG
tulis(string.sub(nama, 1, 4)) -- Output: sama
tulis(string.rep("ha", 3)) -- Output: hahaha
```

## String Multi-baris

Gunakan kurung ganda untuk string multi-baris:

```bash
ada puisi = [[
Budaya adalah akar
Bahasa adalah jiwa
Kode adalah masa depan
]]

tulis(puisi)
```
