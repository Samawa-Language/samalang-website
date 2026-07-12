---
title: Data Types
description: Understanding SamaLang data types — numbers, strings, booleans, nil, and tables
---

SamaLang inherits all data types from Lua. Since SamaLang transpiles directly to Lua, every Lua data type is available.

## Numbers

SamaLang uses floating-point numbers (double precision) for all numeric values.

```bash
ada umur = 25
ada tinggi = 170.5
ada negatif = -10

tulis(umur)
tulis(tinggi)
```

## Strings

Strings are sequences of characters enclosed in double quotes.

```bash
ada nama = "SamaLang"
ada sapa = "Halo, Dunia!"

tulis(nama)
tulis(sapa)
```

String concatenation uses the `..` operator:

```bash
ada nama = "Sama"
ada bahasa = "Lang"
ada gabung = nama .. bahasa

tulis(gabung) -- Output: SamaLang
```

## Booleans

SamaLang has two boolean values: `tutu` (true) and `siong` (false).

```bash
ada aktif = tutu
ada kosong = siong

lamen aktif tres
    tulis("Aktif!")
jure_mo
```

## Nil

The `nda_isi` keyword represents the absence of a value (equivalent to Lua's `nil`).

```bash
ada data = nda_isi

lamen data == nda_isi tres
    tulis("Tidak ada data")
jure_mo
```

## Tables

Tables are SamaLang's primary data structure. They can be used as arrays, dictionaries, or objects.

```bash
-- Array
ada buah = {"apel", "mangga", "jeruk"}
tulis(buah[1]) -- Output: apel

-- Dictionary
ada mahasiswa = {
    nama = "Ahmad",
    umur = 20,
    jurusan = "Teknik"
}

tulis(mahasiswa.nama)
```

See [Tables](/concepts/tables) for more details.

## Type Checking

Use the `type()` function to check a value's type:

```bash
ada x = 42
tulis(type(x)) -- Output: number

ada s = "hello"
tulis(type(s)) -- Output: string
```

## Summary

| Type | Example | Lua Equivalent |
|------|---------|----------------|
| Number | `42`, `3.14` | `number` |
| String | `"text"` | `string` |
| Boolean | `tutu`, `siong` | `boolean` |
| Nil | `nda_isi` | `nil` |
| Table | `{1, 2, 3}` | `table` |
| Function | `fungsi ... jure_mo` | `function` |
