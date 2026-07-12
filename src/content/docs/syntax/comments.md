---
title: "# (comments)"
description: Single-line comments — komentar satu baris
---

## Description / Deskripsi

The `#` symbol starts a single-line comment in SamaLang. Everything after `#` on that line is ignored by the compiler.
It is equivalent to `--` in standard Lua.

Simbol `#` digunakan untuk memulai komentar satu baris dalam SamaLang. Semua teks setelah `#` pada baris tersebut diabaikan oleh kompiler.
Setara dengan `--` di Lua.

## Usage / Penggunaan

```bash
# This is a comment
tulis("Code still runs")
```

## Examples

### Inline Comments

```bash
ada nama = "SamaLang"  # Nama bahasa
tulis(nama)
```

### Commenting Out Code

```bash
# tulis("This line is commented out")
tulis("This line runs")
-- Output: This line runs
```

### Documentation Comments

```bash
# Fungsi untuk menyapa pengguna
# Parameter: nama (string)
# Return: string
fungsi sapa(nama)
    semalik "Halo, " .. nama
jure_mo
```

### Section Headers

```bash
# ============================================
# Bagian: Variabel Global
# ============================================

ada versi = "2.0"
ada bahasa = "Samawa"
```

:::caution
In standard Lua, comments use `--`. In SamaLang, the transpiler replaces `#` with `--`. If you write `--` in a `.sl` file, it will NOT be treated as a comment — it will cause a syntax error.
:::
