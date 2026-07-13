---
title: ada (local)
description: Declare local variables in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `ada` keyword declares a local variable in SamaLang v1.0.
It is equivalent to `local` in standard Lua.

## Syntax

```sl
ada variable_name = value
```

## Examples

### Basic Variable

```sl
ada nama = "SamaLang"
ada versi = 1.0
ada aktif = true

tulis(nama)    # Output: SamaLang
tulis(versi)   # Output: 1.0
tulis(aktif)   # Output: true
```

### Without Initial Value

```sl
ada data
tulis(data) # Output: nil (nda_isi)
```

### Multiple Variables

```sl
ada x = 10
ada y = 20
ada jumlah = x + y
tulis(jumlah) # Output: 30
```

### Variable Reassignment

```sl
ada nama = "SamaLang"
tulis(nama) # Output: SamaLang

nama = "SamaLang v2"
tulis(nama) # Output: SamaLang v2
```

:::tip
Always use `ada` when you need a local variable. Variables declared without `ada` become global, which can lead to unexpected behavior.
:::

## Lua Equivalent

```lua
local nama = "SamaLang"
local versi = 1.0
local aktif = true

print(nama)
print(versi)
print(aktif)
```
