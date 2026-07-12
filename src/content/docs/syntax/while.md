---
title: selama (while)
description: While loop — perulangan while
---

## Description / Deskripsi

The `selama` keyword starts a while loop in SamaLang.
It is equivalent to `while` in standard Lua.

Keyword `selama` digunakan untuk memulai perulangan while dalam SamaLang.
Setara dengan `while` di Lua.

## Usage / Penggunaan

```bash
selama condition boat
    -- code
jure_mo
```

## Examples

### Countdown

```bash
ada hitung = 5

selama hitung > 0 boat
    tulis(hitung)
    hitung = hitung - 1
jure_mo

tulis("Lepas landas!")
-- Output: 5, 4, 3, 2, 1, Lepas landas!
```

### Sum Until Limit

```bash
ada total = 0
ada i = 1

selama total < 100 boat
    total = total + i
    i = i + 1
jure_mo

tulis("Total: " .. tostring(total))
tulis("Iterasi: " .. tostring(i - 1))
```

### With Break

```bash
ada angka = {10, 20, 30, 40, 50}
ada i = 1

selama i <= #angka boat
    lamen angka[i] == 30 tres
        tulis("Ketemu: 30")
        jangka_mo
   jure_mo
    i = i + 1
jure_mo
```
