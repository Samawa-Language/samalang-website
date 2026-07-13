---
title: jure_mo (end)
description: Penanda akhir blok kode
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `jure_mo` menandai akhir dari sebuah blok kode dalam Samalang.
Setara dengan `end` di Lua.

## Penggunaan

```sl
-- Blok-blok yang menggunakan jure_mo:
fungsi nama()
    -- kode
jure_mo

lamen kondisi tres
    -- kode
jure_mo

selama kondisi boat
    -- kode
jure_mo

untuk i = 1, 10 boat
    -- kode
jure_mo
```

## Contoh

### Menutup Fungsi

```sl
fungsi tambah(a, b)
    semalik a + b
jure_mo
```

### Menutup If

```sl
ada umur = 20

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
```

### Menutup While

```sl
ada i = 1

selama i <= 5 boat
    tulis(i)
    i = i + 1
jure_mo
```

### Menutup For

```sl
untuk i = 1, 5 boat
    tulis("Iterasi " .. tostring(i))
jure_mo
```

### Blok Bersarang

```sl
fungsi proses()
    ada data = {1, 2, 3}

    lamen #data > 0 tres
        untuk i = 1, #data boat
            tulis(data[i])
        jure_mo
    jure_mo
jure_mo
```

:::tip
Pastikan setiap blok `fungsi`, `lamen`, `selama`, `untuk`, dan `sampe` diakhiri dengan `jure_mo`. Kekurangan `jure_mo` akan menyebabkan error sintaks.
:::
