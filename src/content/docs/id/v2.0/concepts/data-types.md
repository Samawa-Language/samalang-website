---
title: Tipe Data
description: Memahami tipe data Samalang v2.0 — angka, string, boolean, nil, dan tabel
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

Samalang mewarisi semua tipe data dari Lua. Karena Samalang ditranspile langsung ke Lua, setiap tipe data Lua tersedia.

## Angka

Samalang menggunakan angka floating-point (presisi ganda) untuk semua nilai numerik.

```sl
ada umur = 25
ada tinggi = 170.5
ada negatif = -10

tulis(umur)
tulis(tinggi)
```

## String

String adalah urutan karakter yang diapit oleh tanda kutip ganda.

```sl
ada nama = "Samalang"
ada sapa = "Halo, Dunia!"

tulis(nama)
tulis(sapa)
```

Penggabungan string menggunakan operator `..`:

```sl
ada nama = "Sama"
ada bahasa = "Lang"
ada gabung = nama .. bahasa

tulis(gabung) -- Output: Samalang
```

## Boolean

Samalang memiliki dua nilai boolean: `tutu` (benar) dan `siong` (salah).

```sl
ada aktif = tutu
ada kosong = siong

lamen aktif tres
    tulis("Aktif!")
jure_mo
```

## Nil (Nda Isi)

Keyword `nda_isi` merepresentasikan ketiadaan nilai (setara dengan `nil` di Lua).

```sl
ada data = nda_isi

lamen data == nda_isi tres
    tulis("Tidak ada data")
jure_mo
```

## Tabel

Tabel adalah struktur data utama Samalang. Bisa digunakan sebagai array, dictionary, atau objek.

```sl
-- Array
ada buah = {"apel", "mangga", "jeruk"}
tulis(buah[1]) -- Output: apel

-- Dictionary
ada mahasiswa = {
    nama = "Ahmad",
    umur = 20,
    jurusan = "Teknik"
}

tulis(mahasiswa.nama)
```

## Fungsi

Fungsi adalah tipe data first-class di Samalang.

```sl
ada tambah = fungsi(a, b)
    semalik a + b
jure_mo

tulis(tambah(3, 5)) -- Output: 8
```

## Ringkasan

| Tipe | Contoh | Setara Lua |
|------|--------|------------|
| Number | `42`, `3.14` | `number` |
| String | `"teks"` | `string` |
| Boolean | `tutu`, `siong` | `boolean` |
| Nil | `nda_isi` | `nil` |
| Table | `{1, 2, 3}` | `table` |
| Function | `fungsi ... jure_mo` | `function` |
