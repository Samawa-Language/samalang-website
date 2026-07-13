---
title: semalik (return)
description: Kembalikan nilai dari fungsi
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `semalik` digunakan untuk mengembalikan nilai dari fungsi dalam Samalang.
Setara dengan `return` di Lua.

## Penggunaan

```sl
fungsi nama_fungsi()
    -- kode
    semalik nilai
jure_mo
```

## Contoh

### Mengembalikan Nilai

```sl
fungsi tambah(a, b)
    semalik a + b
jure_mo

tulis(tambah(3, 5)) -- Output: 8
```

### Mengembalikan String

```sl
fungsi sapa(nama)
    semalik "Halo, " .. nama .. "!"
jure_mo

tulis(sapa("Dunia")) -- Output: Halo, Dunia!
```

### Mengembalikan Boolean

```sl
fungsi cek_positif(n)
    semalik n > 0
jure_mo

lamen cek_positif(10) == tutu tres
    tulis("Positif")
jure_mo
-- Output: Positif
```

### Mengembalikan Nda Isi

```sl
fungsi cari_nilai(data)
    lamen data == nda_isi tres
        semalik nda_isi
    jure_mo
    semalik data
jure_mo

ada hasil = cari_nilai(nda_isi)
tulis(hasil) -- Output: nda_isi
```

### Return Dini

```sl
fungsi validasi(data)
    lamen data == nda_isi tres
        semalik siong
    jure_mo

    -- proses data
    semalik tutu
jure_mo
```

### Multiple Nilai Kembali

```sl
fungsi bagi(a, b)
    semalik a / b, a % b
jure_mo

ada hasil, sisa = bagi(10, 3)
tulis(hasil)  -- Output: 3.333...
tulis(sisa)   -- Output: 1
```

:::note
`semalik` adalah ekuivalen Samawa dari `return` di Lua. Anda bisa mengembalikan multiple nilai dengan memisahkan nilai menggunakan koma.
:::
