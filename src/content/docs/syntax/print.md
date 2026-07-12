---
title: tulis (print)
description: Print output to console — mencetak output ke konsol
---

## Description / Deskripsi

The `tulis` keyword prints output to the console in SamaLang.
It is equivalent to `print` in standard Lua.

Keyword `tulis` digunakan untuk mencetak output ke konsol dalam SamaLang.
Setara dengan `print` di Lua.

## Usage / Penggunaan

```bash
tulis(value)
```

## Examples

### Print String

```bash
tulis("Halo, Dunia!")
-- Output: Halo, Dunia!
```

### Print Number

```bash
ada umur = 25
tulis(umur)
-- Output: 25
```

### Print Multiple Values

```bash
ada nama = "SamaLang"
ada versi = 2.0
tulis(nama, versi)
-- Output: SamaLang    2.0
```

### Print with Concatenation

```bash
ada nama = "Ahmad"
tulis("Halo, " .. nama .. "!")
-- Output: Halo, Ahmad!
```

### Print Boolean

```bash
ada aktif = true
tulis(aktif)
-- Output: true
```

### Print Table Length

```bash
ada buah = {"apel", "mangga", "jeruk"}
tulis("Jumlah buah: " .. tostring(#buah))
-- Output: Jumlah buah: 3
```

:::tip
Use `tostring()` to convert numbers or booleans to strings before concatenation with `..`.
:::
