---
title: ada (local)
description: Deklarasi variabel lokal
---

## Description / Deskripsi

The `ada` keyword declares a local variable in SamaLang.
It is equivalent to `local` in standard Lua.

Keyword `ada` digunakan untuk mendeklarasikan variabel lokal dalam SamaLang.
Setara dengan `local` di Lua.

## Usage / Penggunaan

```bash
ada nama_variabel = nilai
```

## Examples

```bash
ada nama = "SamaLang"
ada versi = 2.0
ada aktif = true

tulis(nama)    -- Output: SamaLang
tulis(versi)   -- Output: 2.0
tulis(aktif)   -- Output: true
```

### Tanpa Nilai Awal

```bash
ada data
tulis(data) -- Output: nil (nda_isi)
```

:::tip
Selalu gunakan `ada` saat Anda membutuhkan variabel lokal. Variabel yang dideklarasikan tanpa `ada` akan menjadi global, yang bisa menyebabkan perilaku yang tidak terduga.
:::
