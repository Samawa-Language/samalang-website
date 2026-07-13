---
title: lamen (if)
description: Pernyataan kondisional if
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `lamen` digunakan untuk memulai pernyataan kondisional (jika) dalam Samalang.
Setara dengan `if` di Lua.

## Penggunaan

```sl
lamen kondisi tres
    -- kode jika kondisi benar
jure_mo
```

## Contoh

### If Dasar

```sl
ada umur = 20

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
```

### If dengan Else

```sl
ada nilai = 75

lamen nilai >= 70 tres
    tulis("Lulus")
jure_mo
lamen_no
    tulis("Tidak lulus")
jure_mo
```

### If dengan Elseif

```sl
ada nilai = 85

lamen nilai >= 90 tres
    tulis("A")
jure_mo
lamen_no_kebali nilai >= 80 tres
    tulis("B")
jure_mo
lamen_no_kebali nilai >= 70 tres
    tulis("C")
jure_mo
lamen_no
    tulis("D")
jure_mo
```

### If Bersarang

```sl
ada umur = 25
ada punya_kerja = tutu

lamen umur >= 18 tres
    lamen punya_kerja tres
        tulis("Dewasa dan bekerja")
    jure_mo
    lamen_no
        tulis("Dewasa tapi belum bekerja")
    jure_mo
jure_mo
```

### If dengan Operator Logika

```sl
ada suhu = 38
ada batuk = tutu

lamen suhu > 37 dan batuk tres
    tulis("Kemungkinan flu")
jure_mo
```

:::note
`lamen` adalah ekuivalen Samawa dari `if` di Lua. Gunakan `tres` untuk menandai awal blok dan `jure_mo` untuk menandai akhir blok.
:::
