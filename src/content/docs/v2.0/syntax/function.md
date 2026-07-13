---
title: fungsi (function)
description: Define functions in SamaLang v2.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v2.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `fungsi` keyword defines a new function in SamaLang.
It is equivalent to `function` in standard Lua.

## Syntax

```sl
fungsi nama_fungsi(parameter)
    -- code
    semalik value
jure_mo
```

## Examples

### Simple Function

```sl
fungsi sapa(nama)
    tulis("Halo, " .. nama .. "!")
jure_mo

sapa("Ahmad") -- Output: Halo, Ahmad!
sapa("Sari")  -- Output: Halo, Sari!
```

### Function with Return Value

```sl
fungsi tambah(a, b)
    semalik a + b
jure_mo

ada hasil = tambah(3, 5)
tulis(hasil) -- Output: 8
```

### Function Without Parameters

```sl
fungsi sapa()
    tulis("Selamat datang di SamaLang!")
jure_mo

sapa()
```

### Recursive Function

```sl
fungsi faktorial(n)
    lamen n <= 1 tres
        semalik 1
    jure_mo
    semalik n * faktorial(n - 1)
jure_mo

tulis(faktorial(5)) -- Output: 120
```

### Multiple Return Values

```sl
fungsi bagi(a, b)
    semalik a / b, a % b
jure_mo

ada hasil, sisa = bagi(10, 3)
tulis(hasil) -- Output: 3.333...
tulis(sisa)  -- Output: 1
```

## Lua Equivalent

```lua
local function sapa(nama)
    print("Halo, " .. nama .. "!")
end

sapa("Ahmad")
```
