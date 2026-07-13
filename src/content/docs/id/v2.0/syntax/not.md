---
title: no (not)
description: Operator logika NOT
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `no` adalah operator logika NOT dalam Samalang. Membalik nilai boolean — `tutu` menjadi `siong`, dan `siong` menjadi `tutu`.
Setara dengan `not` di Lua.

## Penggunaan

```sl
lamen no kondisi tres
    -- kode jika kondisi asli siong
jure_mo
```

## Contoh

### Dasar

```sl
ada aktif = siong

lamen no aktif tres
    tulis("Tidak aktif")
jure_mo
-- Output: Tidak aktif
```

### Negasi Nilai Benar

```sl
ada benar = tutu

lamen no benar tres
    tulis("Ini tidak akan dijalankan")
jure_mo
-- (tidak ada output)
```

### Dengan Perbandingan

```sl
ada umur = 15

lamen no umur >= 18 tres
    tulis("Belum dewasa")
jure_mo
-- Output: Belum dewasa
```

### Kombinasi dengan Dan/Atau

```sl
ada a = tutu
ada b = siong

lamen no a dan b tres
    tulis("Kondisi 1")
jure_mo

lamen no a atau b tres
    tulis("Kondisi 2")
jure_mo
-- Output: Kondisi 2
```

### Pengecekan Nda Isi

```sl
ada data = nda_isi

lamen no data == nda_isi tres
    tulis("Data tersedia")
jure_mo
lamen_no
    tulis("Data kosong")
jure_mo
-- Output: Data kosong
```

:::note
`no` adalah ekuivalen Samawa dari `not` di Lua. Ini adalah operator unary yang memiliki prioritas lebih tinggi dari operator logika lainnya.
:::
