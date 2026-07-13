---
title: siong (false)
description: Nilai boolean salah
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `siong` merepresentasikan nilai boolean `false` dalam Samalang.
Setara dengan `false` di Lua.

## Penggunaan

```sl
ada variabel = siong
```

## Contoh

### Penugasan Dasar

```sl
ada kosong = siong
tulis(kosong) -- Output: false
```

### Dengan Kondisi

```sl
ada aktif = siong

lamen aktif == siong tres
    tulis("Tidak aktif")
jure_mo
-- Output: Tidak aktif
```

### Pengecekan Negasi

```sl
ada valid = siong

lamen no valid tres
    tulis("Data tidak valid")
jure_mo
-- Output: Data tidak valid
```

### Inisialisasi Default

```sl
ada selesai = siong

-- Proses
selesai = tutu

lamen selesai tres
    tulis("Proses selesai!")
jure_mo
-- Output: Proses selesai!
```

:::note
`siong` adalah ekuivalen Samawa dari `false` di Lua. Salah satu dari dua nilai boolean, yang lainnya adalah `tutu` (true).
:::
