---
title: boat (do)
description: Penanda awal blok perulangan
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `boat` menandai awal blok kode pada perulangan `selama`, `unti`, dan `untuk`.
Setara dengan `do` di Lua.

## Penggunaan

```sl
selama kondisi boat
    -- kode perulangan
jure_mo

untuk variabel = awal, akhir boat
    -- kode perulangan
jure_mo
```

## Contoh

### Dengan While

```sl
ada i = 1

selama i <= 5 boat
    tulis(i)
    i = i + 1
jure_mo
-- Output: 1, 2, 3, 4, 5
```

### Dengan For

```sl
untuk i = 1, 10 boat
    tulis("Angka: " .. tostring(i))
jure_mo
```

### Dengan Repeat-Until

```sl
ada x = 0

sampe x == 5 boat
    x = x + 1
    tulis(x)
jure_mo
-- Output: 1, 2, 3, 4, 5
```

### Blok Bersarang

```sl
untuk i = 1, 3 boat
    untu j = 1, 3 boat
        tulis(tostring(i) .. " x " .. tostring(j) .. " = " .. tostring(i * j))
    jure_mo
jure_mo
```

:::note
`boat` adalah ekuivalen Samawa dari `do` di Lua. Ini adalah penanda wajib untuk semua blok perulangan.
:::
