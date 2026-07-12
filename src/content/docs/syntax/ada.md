---
title: ada (local)
description: Declare local variables — deklarasi variabel lokal
---

## Description / Deskripsi

The `ada` keyword declares a local variable in SamaLang.
It is equivalent to `local` in standard Lua.

Keyword `ada` digunakan untuk mendeklarasikan variabel lokal dalam SamaLang.
Setara dengan `local` di Lua.

## Usage / Penggunaan

```bash
ada variable_name = value
```

## Examples

### Basic Variable

```bash
ada nama = "SamaLang"
ada versi = 2.0
ada aktif = true

tulis(nama)    -- Output: SamaLang
tulis(versi)   -- Output: 2.0
tulis(aktif)   -- Output: true
```

### Without Initial Value

```bash
ada data
tulis(data) -- Output: nil (nda_isi)
```

### Multiple Variables

```bash
ada x = 10
ada y = 20
ada jumlah = x + y
tulis(jumlah) -- Output: 30
```

:::tip
Always use `ada` when you need a local variable. Variables declared without `ada` become global, which can lead to unexpected behavior.
:::
