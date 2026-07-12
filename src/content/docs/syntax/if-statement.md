---
title: lamen (if)
description: Conditional branching — percabangan bersyarat
---

## Description / Deskripsi

The `lamen` keyword starts an if statement in SamaLang.
It is equivalent to `if` in standard Lua.

Keyword `lamen` digunakan untuk memulai pernyataan if (jika) dalam SamaLang.
Setara dengan `if` di Lua.

## Usage / Penggunaan

```bash
lamen condition tres
    -- code
jure_mo
```

## Examples

### Basic If

```bash
ada umur = 20

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
```

### If with Else

```bash
ada nilai = 75

lamen nilai >= 70 tres
    tulis("Lulus")
jure_mo
lamen_no
    tulis("Tidak lulus")
jure_mo
```

### If with Elseif

```bash
ada nilai = 85

lamen nilai >= 90 tres
    tulis("A")
jure_mo
lamen_no_kebali nilai >= 80 tres
    tulis("B")
jure_mo
lamen_no_kebali nilai >= 70 tres
    tulis("C")
jure_mo
lamen_no
    tulis("D")
jure_mo
```

### Nested If

```bash
ada umur = 25
ada ktp = true

lamen umur >= 18 tres
    lamen ktp == true tres
        tulis("Boleh voting")
   jure_mo
jure_mo
```
