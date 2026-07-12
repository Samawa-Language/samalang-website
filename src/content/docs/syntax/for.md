---
title: untuk (for)
description: Numeric for loop — perulangan for numerik
---

## Description / Deskripsi

The `untuk` keyword starts a numeric for loop in SamaLang.
It is equivalent to `for` in standard Lua.

Keyword `untuk` digunakan untuk memulai perulangan for numerik dalam SamaLang.
Setara dengan `for` di Lua.

## Usage / Penggunaan

```bash
untuk variable = start, stop, step boat
    -- code
jure_mo
```

The `step` is optional and defaults to `1`.

## Examples

### Count Up

```bash
untuk i = 1, 5 boat
    tulis(i)
jure_mo
-- Output: 1, 2, 3, 4, 5
```

### Count Down

```bash
untuk i = 5, 1, -1 boat
    tulis(i)
jure_mo
-- Output: 5, 4, 3, 2, 1
```

### Step by 2

```bash
untuk i = 0, 10, 2 boat
    tulis(i)
jure_mo
-- Output: 0, 2, 4, 6, 8, 10
```

### Iterate Over Array

```bash
ada buah = {"apel", "mangga", "jeruk", "pisang"}

untuk i = 1, #buah boat
    tulis(tostring(i) .. ". " .. buah[i])
jure_mo
-- Output:
-- 1. apel
-- 2. mangga
-- 3. jeruk
-- 4. pisang
```

### Loop with Variable Scope

```bash
untuk i = 1, 3 boat
    ada nama = "Item " .. tostring(i)
    tulis(nama)
jure_mo
-- i is not accessible here
```

:::note
The loop variable is automatically local to the loop block and cannot be accessed outside.
:::
