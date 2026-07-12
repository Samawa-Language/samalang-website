---
title: "siong (false)"
description: Boolean false value — nilai boolean salah
---

## Description / Deskripsi

The `siong` keyword represents the boolean `false` value in SamaLang.
It is equivalent to `false` in standard Lua.

Keyword `siong` merepresentasikan nilai boolean `false` dalam SamaLang.
Setara dengan `false` di Lua.

## Usage / Penggunaan

```bash
ada variabel = siong
```

## Examples

### Basic Assignment

```bash
ada kosong = siong
tulis(kosong) -- Output: false
```

### With Condition

```bash
ada aktif = siong

lamen aktif == siong tres
    tulis("Tidak aktif")
jure_mo
-- Output: Tidak aktif
```

### Negation Check

```bash
ada valid = siong

lamen no valid tres
    tulis("Data tidak valid")
jure_mo
-- Output: Data tidak valid
```

### Default Initialization

```bash
ada selesai = siong

-- Process
selesai = tutu

lamen selesai tres
    tulis("Proses selesai!")
jure_mo
-- Output: Proses selesai!
```

:::note
`siong` is the Samawa equivalent of Lua's `false`. It is one of two boolean values, the other being `tutu` (true).
:::
