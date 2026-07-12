---
title: "kenang (require)"
description: Module import statement — pernyataan impor modul
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

### Import Standard Library

```bash
ada math = kenang('math')
tulis(math.pi) -- Output: 3.1416135623731
```

### Import String Module

```bash
ada string = kenang('string')
tulis(string.upper("hello")) -- Output: HELLO
tulis(string.lower("WORLD")) -- Output: world
```

### Import JSON Library

```bash
ada json = kenang('dkjson')

ada data = {nama = "Ahmad", umur = 25}
ada encoded = json.encode(data)
tulis(encoded)
```

### Import with Alias

```bash
ada path = kenang('path')
ada sep = path.sep

tulis("Path separator: " .. sep)
```

:::note
`kenang` is the Samawa equivalent of Lua's `require`. The module name must be a string literal (e.g., `'math'`, not a variable).
:::
