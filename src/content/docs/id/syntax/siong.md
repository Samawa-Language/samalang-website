---
title: siong (false)
description: Nilai boolean salah
---

## Description / Deskripsi

The `siong` keyword represents the boolean `false` value in SamaLang.
It is equivalent to `false` in standard Lua.

Keyword `siong` merepresentasikan nilai boolean `false` dalam SamaLang.
Setara dengan `false` di Lua.

## Usage / Penggunaan

```bash
ada variabel = siong
```

## Examples

### Penugasan Dasar

```bash
ada kosong = siong
tulis(kosong) -- Output: false
```

### Dengan Kondisi

```bash
ada aktif = siong

lamen aktif == siong tres
    tulis("Tidak aktif")
jure_mo
-- Output: Tidak aktif
```

### Pengecekan Negasi

```bash
ada valid = siong

lamen no valid tres
    tulis("Data tidak valid")
jure_mo
-- Output: Data tidak valid
```

### Inisialisasi Default

```bash
ada selesai = siong

-- Proses
selesai = tutu

lamen selesai tres
    tulis("Proses selesai!")
jure_mo
-- Output: Proses selesai!
```

:::note
`siong` adalah ekuivalen Samawa dari `false` di Lua. Salah satu dari dua nilai boolean, yang lainnya adalah `tutu` (true).
:::
