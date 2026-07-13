---
title: ada (local)
description: Declare local variables in SamaLang v2.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v2.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `ada` keyword declares a local variable in SamaLang.
It is equivalent to `local` in standard Lua.

## Syntax

```sl
ada variable_name = value
```

## Examples

### Basic Variable

```sl
ada nama = "SamaLang"
ada versi = 2.0
ada aktif = tutu

tulis(nama)    -- Output: SamaLang
tulis(versi)   -- Output: 2.0
tulis(aktif)   -- Output: true
```

### Without Initial Value

```sl
ada data
tulis(data) -- Output: nil (nda_isi)
```

### Multiple Variables

```sl
ada x = 10
ada y = 20
ada jumlah = x + y
tulis(jumlah) -- Output: 30
```

### Reassigning Variables

```sl
ada skor = 0
skor = 100
tulis(skor) -- Output: 100
```

:::tip
Always use `ada` when you need a local variable. Variables declared without `ada` become global, which can lead to unexpected behavior.
:::

## Lua Equivalent

```lua
local nama = "SamaLang"
local versi = 2.0
local aktif = true
```
