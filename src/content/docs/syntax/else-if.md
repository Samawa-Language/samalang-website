---
title: lamen_no_kebali (elseif)
description: Additional conditional branch — cabang kondisi tambahan
---

## Description / Deskripsi

The `lamen_no_kebali` keyword provides an else-if branch in a conditional chain.
It is equivalent to `elseif` in standard Lua.

Keyword `lamen_no_kebali` digunakan untuk cabang else-if (jika tidak lagi) dalam rantai kondisi.
Setara dengan `elseif` di Lua.

## Usage / Penggunaan

```bash
lamen condition1 tres
    -- code
jure_mo
lamen_no_kebali condition2 tres
    -- code
jure_mo
lamen_no
    -- code
jure_mo
```

## Examples

### Grade System

```bash
ada nilai = 85

lamen nilai >= 90 tres
    tulis("Grade: A")
jure_mo
lamen_no_kebali nilai >= 80 tres
    tulis("Grade: B")
jure_mo
lamen_no_kebali nilai >= 70 tres
    tulis("Grade: C")
jure_mo
lamen_no_kebali nilai >= 60 tres
    tulis("Grade: D")
jure_mo
lamen_no
    tulis("Grade: F")
jure_mo
-- Output: Grade: B
```

### Day of Week

```bash
ada hari = 3

lamen hari == 1 tres
    tulis("Senin")
jure_mo
lamen_no_kebali hari == 2 tres
    tulis("Selasa")
jure_mo
lamen_no_kebali hari == 3 tres
    tulis("Rabu")
jure_mo
lamen_no
    tulis("Hari lain")
jure_mo
-- Output: Rabu
```
