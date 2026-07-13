---
title: nda_isi (nil)
description: Represent absence of a value in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `nda_isi` keyword represents a null/nil value in SamaLang v1.0. It indicates the absence of a value.
It is equivalent to `nil` in standard Lua.

## Syntax

```sl
ada variable = nda_isi
```

## Examples

### Default Value

```sl
ada nama = nda_isi

lamen nama == nda_isi tres
    tulis("Nama belum diatur")
jure_mo
# Output: Nama belum diatur
```

### Check if Table Key Exists

```sl
ada mahasiswa = {nama = "Ahmad"}

lamen mahasiswa.umur == nda_isi tres
    tulis("Umur belum terisi")
jure_mo
# Output: Umur belum terisi
```

### Function Default Parameter

```sl
fungsi sapa(nama)
    lamen nama == nda_isi tres
        nama = "Teman"
    jure_mo
    tulis("Halo, " .. nama .. "!")
jure_mo

sapa()             # Output: Halo, Teman!
sapa("Sari")       # Output: Halo, Sari!
```

### Reset Variable

```sl
ada data = "beberapa data"
tulis(data) # Output: beberapa data

data = nda_isi
tulis(data) # Output: nil
```

:::note
In Lua (and therefore SamaLang), `nil` is the value of any uninitialized variable.
:::

## Lua Equivalent

```lua
local data = nil

if data == nil then
    print("No data")
end
```
