---
title: lamen_no (else)
description: Alternative branch in conditional in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `lamen_no` keyword provides the else branch of an if statement in SamaLang v1.0.
It is equivalent to `else` in standard Lua.

## Syntax

```sl
lamen condition tres
    # code if true
jure_mo
lamen_no
    # code if false
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
# Output: Tetap di rumah
```

### With Function

```sl
fungsi cek_ganjil(n)
    lamen n % 2 == 0 tres
        semalik "Genap"
    jure_mo
    semalik "Ganjil"
jure_mo

tulis(cek_ganjil(7)) # Output: Ganjil
tulis(cek_ganjil(4)) # Output: Genap
```

### Else with Nested Condition

```sl
ada umur = 15

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
lamen_no
    lamen umur >= 13 tres
        tulis("Remaja")
    jure_mo
    lamen_no
        tulis("Anak-anak")
    jure_mo
jure_mo
# Output: Remaja
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
