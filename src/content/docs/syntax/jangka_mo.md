---
title: jangka_mo (break)
description: Exit a loop immediately — keluar dari perulangan segera
---

## Description / Deskripsi

The `jangka_mo` keyword exits the current loop immediately. Any remaining iterations are skipped.
It is equivalent to `break` in standard Lua.

Keyword `jangka_mo` digunakan untuk keluar dari perulangan saat ini secara segera. Sisa iterasi dilewati.
Setara dengan `break` di Lua.

## Usage / Penggunaan

```bash
untu condition boat
    lamen stop_condition tres
        jangka_mo
   jure_mo
jure_mo
```

## Examples

### Find a Value

```bash
ada buah = {"apel", "mangga", "jeruk", "pisang"}
ada target = "jeruk"

untuk i = 1, #buah boat
    lamen buah[i] == target tres
        tulis("Ketemu di index " .. tostring(i))
        jangka_mo
   jure_mo
jure_mo
-- Output: Ketemu di index 3
```

### Skip Invalid Data

```bash
ada data = {10, -5, 20, 0, 30}

untuk i = 1, #data boat
    lamen data[i] <= 0 tres
        tulis("Skip: " .. tostring(data[i]))
        jangka_mo
   jure_mo
    tulis("Proses: " .. tostring(data[i]))
jure_mo
```

### Infinite Loop with Break

```bash
ada i = 1

untu true boat
    lamen i > 5 tres
        jangka_mo
   jure_mo
    tulis(i)
    i = i + 1
jure_mo
```

:::caution
`jangka_mo` only exits the innermost loop. It does not break out of nested loops.
:::
