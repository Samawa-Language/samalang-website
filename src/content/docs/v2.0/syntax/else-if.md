---
title: lamen_no_kebali (elseif)
description: Additional conditional branch in SamaLang v2.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v2.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `lamen_no_kebali` keyword provides an else-if branch in a conditional chain.
It is equivalent to `elseif` in standard Lua.

## Syntax

```sl
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

```sl
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

```sl
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

### Temperature Check

```sl
ada suhu = 36.5

lamen suhu > 38 tres
    tulis("Demam tinggi")
jure_mo
lamen_no_kebali suhu > 37 tres
    tulis("Suhu naik")
jure_mo
lamen_no_kebali suhu >= 36 tres
    tulis("Normal")
jure_mo
lamen_no
    tulis("Suhu rendah")
jure_mo
-- Output: Normal
```

## Lua Equivalent

```lua
local nilai = 85

if nilai >= 90 then
    print("Grade: A")
elseif nilai >= 80 then
    print("Grade: B")
elseif nilai >= 70 then
    print("Grade: C")
elseif nilai >= 60 then
    print("Grade: D")
else
    print("Grade: F")
end
```
