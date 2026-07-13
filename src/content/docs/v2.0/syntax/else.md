---
title: lamen_no (else)
description: Alternative branch in conditional — SamaLang v2.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v2.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `lamen_no` keyword provides the else branch of an if statement.
It is equivalent to `else` in standard Lua.

## Syntax

```sl
lamen condition tres
    -- code if true
jure_mo
lamen_no
    -- code if false
jure_mo
```

## Examples

### Basic Else

```sl
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

```sl
fungsi cek_ganjil(n)
    lamen n % 2 == 0 tres
        semalik siong
    jure_mo
    semalik tutu
jure_mo

tulis(cek_ganjil(7)) -- Output: true
tulis(cek_ganjil(4)) -- Output: false
```

### Grade System

```sl
ada nilai = 65

lamen nilai >= 90 tres
    tulis("Grade: A")
jure_mo
lamen_no_kebali nilai >= 80 tres
    tulis("Grade: B")
jure_mo
lamen_no_kebali nilai >= 70 tres
    tulis("Grade: C")
jure_mo
lamen_no
    tulis("Grade: D")
jure_mo
-- Output: Grade: D
```

## Lua Equivalent

```lua
local cuaca = "hujan"

if cuaca == "cerah" then
    print("Pergi ke taman")
else
    print("Tetap di rumah")
end
```
