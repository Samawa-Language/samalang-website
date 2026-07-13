---
title: lamen (if)
description: Conditional branching in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `lamen` keyword starts an if statement in SamaLang v1.0.
It is equivalent to `if` in standard Lua.

## Syntax

```sl
lamen condition tres
    # code
jure_mo
```

## Examples

### Basic If

```sl
ada umur = 20

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
```

### If with Else

```sl
ada nilai = 75

lamen nilai >= 70 tres
    tulis("Lulus")
jure_mo
lamen_no
    tulis("Tidak lulus")
jure_mo
```

### Nested If

```sl
ada umur = 25
ada ktp = true

lamen umur >= 18 tres
    lamen ktp == true tres
        tulis("Boleh voting")
    jure_mo
jure_mo
```

### Multiple Conditions

```sl
ada nilai = 85

lamen nilai >= 90 tres
    tulis("A")
jure_mo
lamen_no
    lamen nilai >= 80 tres
        tulis("B")
    jure_mo
jure_mo
```

:::note
In SamaLang v1.0, use `lamen_no_kebali` is not available. For else-if chains, nest `lamen_no` blocks.
:::

## Lua Equivalent

```lua
local umur = 20

if umur >= 18 then
    print("Dewasa")
end
```
