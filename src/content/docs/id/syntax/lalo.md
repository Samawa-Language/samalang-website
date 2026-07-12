---
title: lalo (goto)
description: Pernyataan lompatan tak bersyarat
---

## Description / Deskripsi

The `lalo` keyword is the goto statement in SamaLang. It performs an unconditional jump to a label.
It is equivalent to `goto` in standard Lua.

Keyword `lalo` adalah pernyataan goto dalam SamaLang. Melakukan lompatan tak bersyarat ke label.
Setara dengan `goto` di Lua.

## Usage / Penggunaan

```bash
lalo nama_label
-- ...
::nama_label::
```

## Examples

### Melewati Kode

```bash
untuk i = 1, 5 boat
    lalo i == 3 tres
        lalo skip
   jure_mo
    tulis("Proses: " .. tostring(i))
    ::skip::
jure_mo
-- Output:
-- Proses: 1
-- Proses: 2
-- Proses: 4
-- Proses: 5
```

### Keluar Perulangan Lebih Awal

```bash
ada i = 0

ulang
    i = i + 1
    lalo i == 3 tres
        lalo selesai
   jure_mo
    tulis("Iterasi: " .. tostring(i))
    ::selesai::
sampe i > 5

tulis("Selesai di iterasi " .. tostring(i))
-- Output:
-- Iterasi: 1
-- Iterasi: 2
-- Selesai di iterasi 3
```

### Pola Penanganan Error

```bash
fungsi bagi(a, b)
    lalo b == 0 tres
        tulis("Error: Bagi dengan nol!")
        semalik nda_isi
   jure_mo
    ::lanjut::
    semalik a / b
jure_mo

tulis(bagi(10, 2))  -- Output: 5
tulis(bagi(10, 0))  -- Output: Error: Bagi dengan nol!
```

:::note
`lalo` adalah ekuivalen Samawa dari `goto` di Lua. Label dalam Lua didefinisikan menggunakan sintaks `::nama_label::`.
:::
