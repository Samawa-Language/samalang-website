---
title: no (not)
description: Logical NOT operator — operator logika NOT
---

## Description / Deskripsi

The `no` keyword is the logical NOT operator in SamaLang. It inverts a boolean value.
It is equivalent to `not` in standard Lua.

Keyword `no` adalah operator logika NOT dalam SamaLang. Membalik nilai boolean.
Setara dengan `not` di Lua.

## Usage / Penggunaan

```bash
lamen no condition tres
    -- code runs when condition is false
jure_mo
```

## Examples

### Basic NOT

```bash
ada aktif = false

lamen no aktif tres
    tulis("Tidak aktif")
jure_mo
-- Output: Tidak aktif
```

### With Comparison

```bash
ada umur = 15

lamen no umur >= 18 tres
    tulis("Belum dewasa")
jure_mo
-- Output: Belum dewasa
```

### Toggle Logic

```bash
ada lampu = true

-- Turn off
lampu = no lampu
tulis(lampu) -- Output: false

-- Turn back on
lampu = no lampu
tulis(lampu) -- Output: true
```

### With Functions

```bash
fungsi cek_negatif(n)
    semalik no n < 0
jure_mo

tulis(cek_negatif(-5))  -- Output: false
tulis(cek_negatif(10))  -- Output: true
```

:::note
`no` is the Samawa equivalent of Lua's `not`. It returns `true` when the operand is `false` or `nil`, and `false` otherwise.
:::
