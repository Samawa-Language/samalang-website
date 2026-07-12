---
title: fungsi (function)
description: Definisi fungsi
---

## Description / Deskripsi

The `fungsi` keyword defines a new function in SamaLang.
It is equivalent to `function` in standard Lua.

Keyword `fungsi` digunakan untuk mendefinisikan fungsi baru dalam SamaLang.
Setara dengan `function` di Lua.

## Usage / Penggunaan

```bash
fungsi nama_fungsi(parameter)
    -- kode
    semalik nilai
jure_mo
```

## Examples

### Fungsi Sederhana

```bash
fungsi sapa(nama)
    tulis("Halo, " .. nama .. "!")
jure_mo

sapa("Ahmad") -- Output: Halo, Ahmad!
```

### Fungsi dengan Nilai Kembali

```bash
fungsi tambah(a, b)
    semalik a + b
jure_mo

ada hasil = tambah(3, 5)
tulis(hasil) -- Output: 8
```

### Fungsi Rekursif

```bash
fungsi faktorial(n)
    lamen n <= 1 tres
        semalik 1
   jure_mo
    semalik n * faktorial(n - 1)
jure_mo

tulis(faktorial(5)) -- Output: 120
```
