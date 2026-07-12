---
title: lamen_no (else)
description: Alternative branch in conditional — cabang alternatif dalam percabangan
---

## Description / Deskripsi

The `lamen_no` keyword provides the else branch of an if statement.
It is equivalent to `else` in standard Lua.

Keyword `lamen_no` digunakan untuk cabang else (jika tidak) dalam pernyataan if.
Setara dengan `else` di Lua.

## Usage / Penggunaan

```bash
lamen condition tres
    -- code if true
jure_mo
lamen_no
    -- code if false
jure_mo
```

## Examples

### Basic Else

```bash
ada cuaca = "hujan"

lamen cuaca == "cerah" tres
    tulis("Pergi ke taman")
jure_mo
lamen_no
    tulis("Tetap di rumah")
jure_mo
-- Output: Tetap di rumah
```

### With Function

```bash
fungsi cek_ganjil(n)
    lamen n % 2 == 0 tres
        semalik "Genap"
   jure_mo
    semalik "Ganjil"
jure_mo

tulis(cek_ganjil(7)) -- Output: Ganjil
tulis(cek_ganjil(4)) -- Output: Genap
```
