---
title: semalik (return)
description: Return a value from a function in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `semalik` keyword returns a value from a function and exits the function immediately.
It is equivalent to `return` in standard Lua.

## Syntax

```sl
fungsi nama_fungsi()
    # code
    semalik value
jure_mo
```

## Examples

### Return a Value

```sl
fungsi tambah(a, b)
    semalik a + b
jure_mo

ada hasil = tambah(10, 5)
tulis(hasil) # Output: 15
```

### Return Multiple Values

```sl
fungsi bagi(a, b)
    semalik a / b, a % b
jure_mo

ada hasil, sisa = bagi(10, 3)
tulis(hasil) # Output: 3.333...
tulis(sisa)  # Output: 1
```

### Early Return

```sl
fungsi cek_umur(umur)
    lamen umur < 0 tres
        semalik "Tidak valid"
    jure_mo
    semalik "Valid"
jure_mo

tulis(cek_umur(-5))  # Output: Tidak valid
tulis(cek_umur(20))  # Output: Valid
```

### Return Nil

```sl
fungsi cek_nama(nama)
    lamen nama == nda_isi tres
        semalik nda_isi
    jure_mo
    semalik nama
jure_mo

ada hasil = cek_nama(nda_isi)
tulis(hasil) # Output: nil
```

## Lua Equivalent

```lua
function tambah(a, b)
    return a + b
end

local hasil = tambah(10, 5)
print(hasil)
```
