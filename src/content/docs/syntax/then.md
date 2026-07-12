---
title: tres (then)
description: Marks the start of an if/elseif code block — tanda awal blok kode if
---

## Description / Deskripsi

The `tres` keyword marks the start of the code block after `lamen` (if) or `lamen_no_kebali` (elseif).
It is equivalent to `then` in standard Lua.

Keyword `tres` menandai awal blok kode setelah `lamen` (if) atau `lamen_no_kebali` (elseif).
Setara dengan `then` di Lua.

## Usage / Penggunaan

```bash
lamen condition tres
    -- code runs here if condition is true
jure_mo
```

## Examples

### Basic Conditional

```bash
ada hujan = true

lamen hujan tres
    tulis("Bawa payung!")
jure_mo
```

### Multiple Conditions

```bash
ada umur = 20
ada penghasilan = 5000000

lamen umur >= 18 tres
    lamen penghasilan >= 3000000 tres
        tulis("Memenuhi syarat")
   jure_mo
jure_mo
```
