---
title: tres (then)
description: Penanda awal blok kondisional
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `tres` menandai awal blok kode setelah kondisi pada pernyataan `lamen`.
Setara dengan `then` di Lua.

## Penggunaan

```sl
lamen kondisi tres
    -- kode di sini
jure_mo
```

## Contoh

### Dasar

```sl
ada x = 10

lamen x > 5 tres
    tulis("x lebih besar dari 5")
jure_mo
```

### Dengan Else

```sl
ada cuaca = "hujan"

lamen cuaca == "cerah" tres
    tulis("Kita pergi ke pantai!")
jure_mo
lamen_no
    tulis("Kita tetap di rumah.")
jure_mo
```

### Multiple Kondisi

```sl
ada umur = 20
ada mahasiswa = tutu

lamen umur >= 18 dan mahasiswa == tutu tres
    tulis("Mahasiswa dewasa")
jure_mo
```

:::note
`tres` selalu digunakan setelah kondisi dalam pernyataan `lamen`. Tanpa `tres`, sintaks akan invalid.
:::
