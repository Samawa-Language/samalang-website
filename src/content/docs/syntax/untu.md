---
title: ungu (while alternative)
description: Alternative while loop — perulangan while alternatif
---

## Description / Deskripsi

The `untu` keyword is an alternative way to start a while loop in SamaLang. It functions identically to `selama`.
It is equivalent to `while` in standard Lua.

Keyword `untu` adalah cara alternatif untuk memulai perulangan while dalam SamaLang. Berfungsi sama seperti `selama`.
Setara dengan `while` di Lua.

## Usage / Penggunaan

```bash
untu condition boat
    -- code
jure_mo
```

## Examples

### Basic Loop

```bash
ada i = 1

untu i <= 5 boat
    tulis("Iterasi " .. tostring(i))
    i = i + 1
jure_mo
```

### Processing Items

```bash
ada buah = {"apel", "mangga", "jeruk"}
ada index = 1

untu index <= #buah boat
    tulis("Buah ke-" .. tostring(index) .. ": " .. buah[index])
    index = index + 1
jure_mo
```

:::tip
`untu` and `selama` are interchangeable. Choose whichever reads more naturally in your code.
:::
