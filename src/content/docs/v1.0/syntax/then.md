---
title: tres (then)
description: Mark the start of an if code block in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `tres` keyword marks the start of the code block after `lamen` (if).
It is equivalent to `then` in standard Lua.

## Syntax

```sl
lamen condition tres
    # code runs here if condition is true
jure_mo
```

## Examples

### Basic Conditional

```sl
ada hujan = true

lamen hujan tres
    tulis("Bawa payung!")
jure_mo
```

### Multiple Conditions

```sl
ada umur = 20
ada penghasilan = 5000000

lamen umur >= 18 tres
    lamen penghasilan >= 3000000 tres
        tulis("Memenuhi syarat")
    jure_mo
jure_mo
```

### With Else

```sl
ada nilai = 65

lamen nilai >= 70 tres
    tulis("Lulus")
jure_mo
lamen_no
    tulis("Tidak lulus")
jure_mo
# Output: Tidak lulus
```

:::note
`tres` is always used after `lamen` to separate the condition from the code block. It is required in every `lamen` statement.
:::

## Lua Equivalent

```lua
local hujan = true

if hujan then
    print("Bawa payung!")
end
```
