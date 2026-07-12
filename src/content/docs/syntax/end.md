---
title: jure_mo (end)
description: End a code block — menutup blok kode
---

## Description / Deskripsi

The `jure_mo` keyword ends a block of code in SamaLang. It is used to close `if`, `while`, `for`, `function`, and other block structures.
It is equivalent to `end` in standard Lua.

Keyword `jure_mo` digunakan untuk menutup blok kode dalam SamaLang. Digunakan untuk menutup `if`, `while`, `for`, `fungsi`, dan struktur blok lainnya.
Setara dengan `end` di Lua.

## Usage / Penggunaan

```bash
-- End an if block
lamen condition tres
    -- code
jure_mo

-- End a function
fungsi nama()
    -- code
jure_mo
```

## Examples

### Closing Different Blocks

```bash
-- If block
lamen true tres
    tulis("A")
jure_mo

-- Function block
fungsi hello()
    tulis("Hello!")
jure_mo

-- While block
ada i = 1
untu i <= 5 boat
    tulis(i)
    i = i + 1
jure_mo
```

:::caution
Every block opened with `lamen`, `fungsi`, `untu`, `selama`, `untuk`, or `boat` must be closed with `jure_mo`. Missing `jure_mo` will cause a syntax error.
:::
