---
title: selama (while)
description: Perulangan while
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `selama` digunakan untuk memulai perulangan while dalam Samalang.
Setara dengan `while` di Lua.

## Penggunaan

```sl
selama kondisi boat
    -- kode
jure_mo
```

## Contoh

### Hitung Mundur

```sl
ada hitung = 5

selama hitung > 0 boat
    tulis(hitung)
    hitung = hitung - 1
jure_mo

tulis("Lepas landas!")
-- Output: 5, 4, 3, 2, 1, Lepas landas!
```

### Penjumlahan Hingga Batas

```sl
ada total = 0
ada i = 1

selama total < 100 boat
    total = total + i
    i = i + 1
jure_mo

tulis("Total: " .. tostring(total))
```

### Perulangan Tak Terbatas dengan Break

```sl
ada i = 0

selama tutu boat
    i = i + 1
    lamen i >= 5 tres
        jangka_mo
    jure_mo
    tulis(i)
jure_mo
-- Output: 1, 2, 3, 4
```

### While dengan Kondisi Kompleks

```sl
ada nama = ""
ada percobaan = 0

selama nama == "" dan percobaan < 3 boat
    percobaan = percobaan + 1
    tulis("Percobaan " .. tostring(percobaan))
jure_mo
-- Output: Percobaan 1, Percobaan 2, Percobaan 3
```

:::note
`selama` adalah ekuivalen Samawa dari `while` di Lua. Kondisi diperiksa sebelum setiap iterasi. Gunakan `boat` untuk menandai awal blok dan `jure_mo` untuk akhir blok.
:::
