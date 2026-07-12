---
title: semalik (return)
description: Return a value from a function — mengembalikan nilai dari fungsi
---

## Description / Deskripsi

The `semalik` keyword returns a value from a function and exits the function immediately.
It is equivalent to `return` in standard Lua.

Keyword `semalik` digunakan untuk mengembalikan nilai dari fungsi dan langsung keluar dari fungsi.
Setara dengan `return` di Lua.

## Usage / Penggunaan

```bash
fungsi nama_fungsi()
    -- code
    semalik value
jure_mo
```

## Examples

### Return a Value

```bash
fungsi tambah(a, b)
    semalik a + b
jure_mo

ada hasil = tambah(10, 5)
tulis(hasil) -- Output: 15
```

### Return Multiple Values

```bash
fungsi bagi(a, b)
    semalik a / b, a % b
jure_mo

ada hasil, sisa = bagi(10, 3)
tulis(hasil) -- Output: 3.333...
tulis(sisa)  -- Output: 1
```

### Early Return

```bash
fungsi cek_umur(umur)
    lamen umur < 0 tres
        semalik "Tidak valid"
   jure_mo
    semalik "Valid"
jure_mo

tulis(cek_umur(-5))  -- Output: Tidak valid
tulis(cek_umur(20))  -- Output: Valid
```
