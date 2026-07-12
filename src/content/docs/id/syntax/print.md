---
title: tulis (print)
description: Cetak output ke konsol
---

## Description / Deskripsi

The `tulis` keyword prints output to the console in SamaLang.
It is equivalent to `print` in standard Lua.

Keyword `tulis` digunakan untuk mencetak output ke konsol dalam SamaLang.
Setara dengan `print` di Lua.

## Usage / Penggunaan

```bash
tulis(nilai)
```

## Examples

### Cetak String

```bash
tulis("Halo, Dunia!")
-- Output: Halo, Dunia!
```

### Cetak Angka

```bash
ada umur = 25
tulis(umur)
-- Output: 25
```

### Cetak dengan Penggabungan

```bash
ada nama = "Ahmad"
tulis("Halo, " .. nama .. "!")
-- Output: Halo, Ahmad!
```

:::tip
Gunakan `tostring()` untuk mengkonversi angka atau boolean ke string sebelum digabung dengan `..`.
:::
