---
title: tres (then)
description: Marks the start of an if/elseif code block in SamaLang v2.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v2.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `tres` keyword marks the start of the code block after `lamen` (if) or `lamen_no_kebali` (elseif).
It is equivalent to `then` in standard Lua.

## Syntax

```sl
lamen condition tres
    -- code runs here if condition is true
jure_mo
```

## Examples

### Basic Conditional

```sl
ada hujan = tutu

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

### With Elseif

```sl
ada cuaca = "hujan"

lamen cuaca == "cerah" tres
    tulis("Pergi ke taman")
jure_mo
lamen_no_kebali cuaca == "hujan" tres
    tulis("Bawa payung")
jure_mo
lamen_no
    tulis("Tetap di rumah")
jure_mo
```

## Lua Equivalent

```lua
local hujan = true

if hujan then
    print("Bawa payung!")
end
```
