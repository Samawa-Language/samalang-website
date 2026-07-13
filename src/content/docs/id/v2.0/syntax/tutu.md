---
title: tutu (true)
description: Nilai boolean benar
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `tutu` merepresentasikan nilai boolean `true` dalam Samalang.
Setara dengan `true` di Lua.

## Penggunaan

```sl
ada variabel = tutu
```

## Contoh

### Penugasan Dasar

```sl
ada aktif = tutu
tulis(aktif) -- Output: true
```

### Dengan Kondisi

```sl
ada lampu = tutu

lamen lampu == tutu tres
    tulis("Lampu menyala")
jure_mo
-- Output: Lampu menyala
```

### Pola Toggle

```sl
ada mode = tutu
tulis(mode) -- Output: true

mode = siong
tulis(mode) -- Output: false
```

### Pengembalian Fungsi

```sl
fungsi cek_ganjil(n)
    semalik n % 2 ~= 0
jure_mo

lamen cek_ganjil(7) == tutu tres
    tulis("7 adalah bilangan ganjil")
jure_mo
-- Output: 7 adalah bilangan ganjil
```

:::note
`tutu` adalah ekuivalen Samawa dari `true` di Lua. Salah satu dari dua nilai boolean, yang lainnya adalah `siong` (false).
:::
