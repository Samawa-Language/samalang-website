---
title: kenang (require)
description: Pernyataan impor modul
---

## Description / Deskripsi

The `kenang` keyword is used to import/load modules in SamaLang. It takes a module name as a string argument.
It is equivalent to `require` in standard Lua.

Keyword `kenang` digunakan untuk mengimpor/memuat modul dalam SamaLang. Menggunakan nama modul sebagai argumen string.
Setara dengan `require` di Lua.

## Usage / Penggunaan

```bash
ada modul = kenang('nama_modul')
```

## Examples

### Impor Perpustakaan Standar

```bash
ada math = kenang('math')
tulis(math.pi) -- Output: 3.1416135623731
```

### Impor Modul String

```bash
ada string = kenang('string')
tulis(string.upper("hello")) -- Output: HELLO
tulis(string.lower("WORLD")) -- Output: world
```

### Impor Pustaka JSON

```bash
ada json = kenang('dkjson')

ada data = {nama = "Ahmad", umur = 25}
ada encoded = json.encode(data)
tulis(encoded)
```

### Impor dengan Alias

```bash
ada path = kenang('path')
ada sep = path.sep

tulis("Pemisah path: " .. sep)
```

:::note
`kenang` adalah ekuivalen Samawa dari `require` di Lua. Nama modul harus berupa literal string (misalnya, `'math'`, bukan variabel).
:::
