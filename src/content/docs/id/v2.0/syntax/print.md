---
title: tulis (print)
description: Cetak output ke konsol
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `tulis` digunakan untuk mencetak output ke konsol dalam Samalang.
Setara dengan `print` di Lua.

## Penggunaan

```sl
tulis(nilai)
```

## Contoh

### Cetak String

```sl
tulis("Halo, Dunia!")
-- Output: Halo, Dunia!
```

### Cetak Angka

```sl
ada umur = 25
tulis(umur)
-- Output: 25
```

### Cetak dengan Penggabungan

```sl
ada nama = "Ahmad"
tulis("Halo, " .. nama .. "!")
-- Output: Halo, Ahmad!
```

### Cetak Boolean

```sl
ada aktif = tutu
tulis(aktif) -- Output: true

ada kosong = siong
tulis(kosong) -- Output: false
```

### Cetak Nilai Kosong

```sl
ada data = nda_isi
tulis(data) -- Output: nda_isi
```

### Cetak Multiple Nilai

```sl
ada nama = "Budi"
ada umur = 20
tulis(nama, umur)
-- Output: Budi    20
```

:::tip
Gunakan `tostring()` untuk mengkonversi angka atau boolean ke string sebelum digabung dengan `..`.
:::
