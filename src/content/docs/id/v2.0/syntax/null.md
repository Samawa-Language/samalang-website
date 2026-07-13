---
title: nda_isi (nil)
description: Nilai kosong
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `nda_isi` merepresentasikan ketiadaan nilai dalam Samalang.
Setara dengan `nil` di Lua.

## Penggunaan

```sl
ada variabel = nda_isi
```

## Contoh

### Inisialisasi Kosong

```sl
ada data = nda_isi
tulis(data) -- Output: nda_isi
```

### Pengecekan Nil

```sl
ada nama = nda_isi

lamen nama == nda_isi tres
    tulis("Nama belum diisi")
jure_mo
-- Output: Nama belum diisi
```

### Nilai Default dengan Operator Atau

```sl
ada input = nda_isi
ada hasil = atau input "Default"
tulis(hasil) -- Output: Default
```

### Nda Isi dalam Tabel

```sl
ada pengguna = {
    nama = "Ahmad",
    email = nda_isi
}

lamen pengguna.email == nda_isi tres
    tulis("Email belum tersedia")
jure_mo
```

### Variabel Tanpa Inisialisasi

```sl
ada x
tulis(x == nda_isi) -- Output: true
```

:::note
`nda_isi` adalah ekuivalen Samawa dari `nil` di Lua. Ini adalah nilai default untuk setiap variabel yang belum diberi nilai.
:::
