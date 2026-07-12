---
title: selama (while)
description: Perulangan while
---

## Description / Deskripsi

The `selama` keyword starts a while loop in SamaLang.
It is equivalent to `while` in standard Lua.

Keyword `selama` digunakan untuk memulai perulangan while dalam SamaLang.
Setara dengan `while` di Lua.

## Usage / Penggunaan

```bash
selama kondisi boat
    -- kode
jure_mo
```

## Examples

### Hitung Mundur

```bash
ada hitung = 5

selama hitung > 0 boat
    tulis(hitung)
    hitung = hitung - 1
jure_mo

tulis("Lepas landas!")
-- Output: 5, 4, 3, 2, 1, Lepas landas!
```

### Penjumlahan Hingga Batas

```bash
ada total = 0
ada i = 1

selama total < 100 boat
    total = total + i
    i = i + 1
jure_mo

tulis("Total: " .. tostring(total))
```
