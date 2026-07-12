---
title: fungsi (function)
description: Define functions — mendefinisikan fungsi
---

## Description / Deskripsi

The `fungsi` keyword defines a new function in SamaLang.
It is equivalent to `function` in standard Lua.

Keyword `fungsi` digunakan untuk mendefinisikan fungsi baru dalam SamaLang.
Setara dengan `function` di Lua.

## Usage / Penggunaan

```bash
fungsi nama_fungsi(parameter)
    -- code
    semalik value
jure_mo
```

## Examples

### Simple Function

```bash
fungsi sapa(nama)
    tulis("Halo, " .. nama .. "!")
jure_mo

sapa("Ahmad") -- Output: Halo, Ahmad!
sapa("Sari")  -- Output: Halo, Sari!
```

### Function with Return Value

```bash
fungsi tambah(a, b)
    semalik a + b
jure_mo

ada hasil = tambah(3, 5)
tulis(hasil) -- Output: 8
```

### Function Without Parameters

```bash
fungsi sapa()
    tulis("Selamat datang di SamaLang!")
jure_mo

sapa()
```

### Recursive Function

```bash
fungsi faktorial(n)
    lamen n <= 1 tres
        semalik 1
   jure_mo
    semalik n * faktorial(n - 1)
jure_mo

tulis(faktorial(5)) -- Output: 120
```
