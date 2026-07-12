---
title: "tutu (true)"
description: Boolean true value — nilai boolean benar
---

## Description / Deskripsi

The `tutu` keyword represents the boolean `true` value in SamaLang.
It is equivalent to `true` in standard Lua.

Keyword `tutu` merepresentasikan nilai boolean `true` dalam SamaLang.
Setara dengan `true` di Lua.

## Usage / Penggunaan

```bash
ada variabel = tutu
```

## Examples

### Basic Assignment

```bash
ada aktif = tutu
tulis(aktif) -- Output: true
```

### With Condition

```bash
ada lampu = tutu

lamen lampu == tutu tres
    tulis("Lampu menyala")
jure_mo
-- Output: Lampu menyala
```

### Toggle Pattern

```bash
ada mode = tutu
tulis(mode) -- Output: true

mode = siong
tulis(mode) -- Output: false
```

### Function Return

```bash
fungsi cek_ganjil(n)
    semalik n % 2 ~= 0
jure_mo

lamen cek_ganjil(7) == tutu tres
    tulis("7 adalah bilangan ganjil")
jure_mo
-- Output: 7 adalah bilangan ganjil
```

:::note
`tutu` is the Samawa equivalent of Lua's `true`. It is one of two boolean values, the other being `siong` (false).
:::
