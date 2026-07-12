---
title: Tipe Data
description: Memahami tipe data SamaLang — angka, string, boolean, nil, dan tabel
---

SamaLang mewarisi semua tipe data dari Lua. Karena SamaLang ditranspile langsung ke Lua, setiap tipe data Lua tersedia.

## Angka

SamaLang menggunakan angka floating-point (presisi ganda) untuk semua nilai numerik.

```bash
ada umur = 25
ada tinggi = 170.5
ada negatif = -10

tulis(umur)
tulis(tinggi)
```

## String

String adalah urutan karakter yang diapit oleh tanda kutip ganda.

```bash
ada nama = "SamaLang"
ada sapa = "Halo, Dunia!"

tulis(nama)
tulis(sapa)
```

Penggabungan string menggunakan operator `..`:

```bash
ada nama = "Sama"
ada bahasa = "Lang"
ada gabung = nama .. bahasa

tulis(gabung) -- Output: SamaLang
```

## Boolean

SamaLang memiliki dua nilai boolean: `tutu` (benar) dan `siong` (salah).

```bash
ada aktif = tutu
ada kosong = siong

lamen aktif tres
    tulis("Aktif!")
jure_mo
```

## Nil

Keyword `nda_isi` merepresentasikan ketiadaan nilai (setara dengan `nil` di Lua).

```bash
ada data = nda_isi

lamen data == nda_isi tres
    tulis("Tidak ada data")
jure_mo
```

## Tabel

Tabel adalah struktur data utama SamaLang. Bisa digunakan sebagai array, dictionary, atau objek.

```bash
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

Lihat [Tabel](/id/concepts/tables) untuk detail lebih lanjut.

## Ringkasan

| Tipe | Contoh | Setara Lua |
|------|--------|------------|
| Number | `42`, `3.14` | `number` |
| String | `"teks"` | `string` |
| Boolean | `tutu`, `siong` | `boolean` |
| Nil | `nda_isi` | `nil` |
| Table | `{1, 2, 3}` | `table` |
| Function | `fungsi ... jure_mo` | `function` |
