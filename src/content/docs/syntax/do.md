---
title: boat (do)
description: Marks the start of a loop body — tanda awal badan perulangan
---

## Description / Deskripsi

The `boat` keyword marks the start of the loop body in `untu`, `selama`, `untuk`, and `sampe` loops.
It is equivalent to `do` in standard Lua.

Keyword `boat` menandai awal badan perulangan dalam loop `untu`, `selama`, `untuk`, dan `sampe`.
Setara dengan `do` di Lua.

## Usage / Penggunaan

```bash
untu condition boat
    -- code
jure_mo

selama condition boat
    -- code
jure_mo

untuk i = 1, 10 boat
    -- code
jure_mo
```

## Examples

### While Loop with Boat

```bash
ada i = 0

untu i < 3 boat
    tulis(i)
    i = i + 1
jure_mo
-- Output: 0, 1, 2
```

### For Loop with Boat

```bash
untuk i = 1, 5 boat
    tulis("Angka: " .. tostring(i))
jure_mo
```

### Nested Loops

```bash
untuk i = 1, 3 boat
    untuk j = 1, 3 boat
        tulis(tostring(i) .. "," .. tostring(j))
    jure_mo
jure_mo
```
