---
title: Strings
description: Working with strings in SamaLang — creation, concatenation, and common operations
---

Strings in SamaLang are sequences of characters, identical to Lua strings.

## Creating Strings

Strings are enclosed in double quotes:

```bash
ada sapa = "Halo, Dunia!"
ada kosong = ""
```

## String Concatenation

Use `..` to join strings:

```bash
ada nama = "Sama"
ada versi = "Lang"
ada gabung = nama .. versi

tulis(gabung) -- Output: SamaLang
```

Mix strings with numbers using `tostring()`:

```bash
ada umur = 20
ada pesan = "Umur saya " .. tostring(umur) .. " tahun"
tulis(pesan)
```

## String Length

Use `#` to get the length:

```bash
ada teks = "SamaLang"
tulis(#teks) -- Output: 8
```

## Common String Functions

| Function | Description | Example |
|----------|-------------|---------|
| `string.len(s)` | Get length | `string.len("halo")` → `4` |
| `string.upper(s)` | Convert to uppercase | `string.upper("halo")` → `"HALO"` |
| `string.lower(s)` | Convert to lowercase | `string.lower("HALO")` → `"halo"` |
| `string.sub(s, i, j)` | Extract substring | `string.sub("halo", 1, 2)` → `"ha"` |
| `string.find(s, pattern)` | Find pattern | `string.find("halo", "lo")` → `3, 4` |
| `string.rep(s, n)` | Repeat string | `string.rep("ha", 3)` → `"hahaha"` |
| `string.reverse(s)` | Reverse string | `string.reverse("halo")` → `"olah"` |
| `string.format(fmt, ...)` | Format string | `string.format("Umur: %d", 20)` |
| `string.gsub(s, pat, rep)` | Replace pattern | `string.gsub("halo", "l", "r")` → `"haro"` |

```bash
ada nama = "samalang"

tulis(string.upper(nama)) -- Output: SAMALANG
tulis(string.sub(nama, 1, 4)) -- Output: sama
tulis(string.rep("ha", 3)) -- Output: hahaha
```

## Escape Sequences

| Sequence | Description |
|----------|-------------|
| `\n` | Newline |
| `\t` | Tab |
| `\\` | Backslash |
| `\"` | Double quote |

```bash
tulis("Baris pertama\nBaris kedua")
tulis("Tab\tdi sini")
tulis("Quote: \"halo\"")
```

## Multi-line Strings

Use double square brackets for multi-line strings:

```bash
ada puisi = [[
Budaya adalah akar
Bahasa adalah jiwa
Kode adalah masa depan
]]

tulis(puisi)
```

## String Comparison

Strings are compared lexicographically (alphabetically):

```bash
lamen "abc" < "abd" tres
    tulis("abc lebih kecil") -- This runs
jure_mo

lamen "abc" == "abc" tres
    tulis("Sama!") -- This runs
jure_mo
```

## Type Checking

```bash
ada s = "SamaLang"
tulis(type(s)) -- Output: string
tulis(type(42)) -- Output: number
```
