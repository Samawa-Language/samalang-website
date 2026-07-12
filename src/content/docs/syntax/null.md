---
title: nda_isi (nil)
description: Represent absence of a value — merepresentasikan ketiadaan nilai
---

## Description / Deskripsi

The `nda_isi` keyword represents a null/nil value in SamaLang. It indicates the absence of a value.
It is equivalent to `nil` in standard Lua.

Keyword `nda_isi` merepresentasikan nilai null/nil dalam SamaLang. Menunjukkan ketiadaan suatu nilai.
Setara dengan `nil` di Lua.

## Usage / Penggunaan

```bash
ada variable = nda_isi
```

## Examples

### Default Value

```bash
ada nama = nda_isi

lamen nama == nda_isi tres
    tulis("Nama belum diatur")
jure_mo
-- Output: Nama belum diatur
```

### Check if Table Key Exists

```bash
ada mahasiswa = {nama = "Ahmad"}

lamen mahasiswa.umur == nda_isi tres
    tulis("Umur belum terisi")
jure_mo
-- Output: Umur belum terisi
```

### Function Default Parameter

```bash
fungsi sapa(nama)
    lamen nama == nda_isi tres
        nama = "Teman"
   jure_mo
    tulis("Halo, " .. nama .. "!")
jure_mo

sapa()             -- Output: Halo, Teman!
sapa("Sari")       -- Output: Halo, Sari!
```

### Reset Variable

```bash
ada data = "beberapa data"
tulis(data) -- Output: beberapa data

data = nda_isi
tulis(data) -- Output: nil
```

:::note
In Lua (and therefore SamaLang), `nil` is the value of any uninitialized variable.
:::
