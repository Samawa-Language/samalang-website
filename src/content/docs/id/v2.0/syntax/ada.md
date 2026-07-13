---
title: ada (local)
description: Deklarasi variabel lokal
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `ada` digunakan untuk mendeklarasikan variabel lokal dalam Samalang.
Setara dengan `local` di Lua.

## Penggunaan

```sl
ada nama_variabel = nilai
```

## Contoh

### Deklarasi Dasar

```sl
ada nama = "Samalang"
ada versi = 2.0
ada aktif = tutu

tulis(nama)    -- Output: Samalang
tulis(versi)   -- Output: 2.0
tulis(aktif)   -- Output: true
```

### Tanpa Nilai Awal

```sl
ada data
tulis(data) -- Output: nda_isi (nil)
```

### Multiple Deklarasi

```sl
ada nama = "Ahmad"
ada umur = 25
ada kota = "Jakarta"

tulis(nama .. " berusia " .. tostring(umur) .. " tahun")
-- Output: Ahmad berusia 25 tahun
```

### Dalam Blok

```sl
ada x = 10

fungsi tambah_sepuluh()
    ada lokal = x + 10
    semalik lokal
jure_mo

tulis(tambah_sepuluh()) -- Output: 20
```

:::tip
Selalu gunakan `ada` saat Anda membutuhkan variabel lokal. Variabel yang dideklarasikan tanpa `ada` akan menjadi global, yang bisa menyebabkan perilaku yang tidak terduga.
:::
