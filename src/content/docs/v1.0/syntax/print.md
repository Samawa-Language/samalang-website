---
title: tulis (print)
description: Print output to console in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `tulis` keyword prints output to the console in SamaLang v1.0.
It is equivalent to `print` in standard Lua.

## Syntax

```sl
tulis(value)
```

## Examples

### Print String

```sl
tulis("Halo, Dunia!")
# Output: Halo, Dunia!
```

### Print Number

```sl
ada umur = 25
tulis(umur)
# Output: 25
```

### Print Multiple Values

```sl
ada nama = "SamaLang"
ada versi = 1.0
tulis(nama, versi)
# Output: SamaLang    1.0
```

### Print with Concatenation

```sl
ada nama = "Ahmad"
tulis("Halo, " .. nama .. "!")
# Output: Halo, Ahmad!
```

### Print Boolean

```sl
ada aktif = true
tulis(aktif)
# Output: true
```

### Print Table Length

```sl
ada buah = {"apel", "mangga", "jeruk"}
tulis("Jumlah buah: " .. tostring(#buah))
# Output: Jumlah buah: 3
```

:::tip
Use `tostring()` to convert numbers or booleans to strings before concatenation with `..`.
:::

## Lua Equivalent

```lua
print("Halo, Dunia!")
```
