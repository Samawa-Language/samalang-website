---
title: Data Types
description: Understanding data types in SamaLang v1.0 — numbers, strings, booleans, nil, and tables
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

SamaLang v1.0 inherits all data types from Lua. Since SamaLang transpiles directly to Lua, every Lua data type is available.

## Numbers

SamaLang uses floating-point numbers (double precision) for all numeric values.

```sl
ada umur = 25
ada tinggi = 170.5
ada negatif = -10

tulis(umur)
tulis(tinggi)
```

## Strings

Strings are sequences of characters enclosed in double quotes.

```sl
ada nama = "SamaLang"
ada sapa = "Halo, Dunia!"

tulis(nama)
tulis(sapa)
```

String concatenation uses the `..` operator:

```sl
ada nama = "Sama"
ada bahasa = "Lang"
ada gabung = nama .. bahasa

tulis(gabung) # Output: SamaLang
```

## Booleans

SamaLang has two boolean values: `true` and `false`.

```sl
ada aktif = true
ada kosong = false

lamen aktif tres
    tulis("Aktif!")
jure_mo
```

## Nil

The `nda_isi` keyword represents the absence of a value (equivalent to Lua's `nil`).

```sl
ada data = nda_isi

lamen data == nda_isi tres
    tulis("Tidak ada data")
jure_mo
```

## Tables

Tables are SamaLang's primary data structure. They can be used as arrays, dictionaries, or objects.

```sl
# Array
ada buah = {"apel", "mangga", "jeruk"}
tulis(buah[1]) # Output: apel

# Dictionary
ada mahasiswa = {
    nama = "Ahmad",
    umur = 20,
    jurusan = "Teknik"
}

tulis(mahasiswa.nama)
```

## Type Checking

Use the `type()` function to check a value's type:

```sl
ada x = 42
tulis(type(x)) # Output: number

ada s = "hello"
tulis(type(s)) # Output: string
```

## Summary

| Type | Example | Lua Equivalent |
|------|---------|----------------|
| Number | `42`, `3.14` | `number` |
| String | `"text"` | `string` |
| Boolean | `true`, `false` | `boolean` |
| Nil | `nda_isi` | `nil` |
| Table | `{1, 2, 3}` | `table` |
| Function | `fungsi ... jure_mo` | `function` |
