---
title: nda_isi (Nil)
description: Nilai kosong (nil) dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`nda_isi` adalah nilai khusus dalam Samalang yang merepresentasikan ketiadaan atau kekosongan nilai. Ini setara dengan `nil` di Lua.

## Sintaks

```sl
ada variabel = nda_isi
```

## Contoh

### Deklarasi dengan nda_isi

```sl
ada nilai = nda_isi
tulis(nilai)  # Output: nda_isi
```

### Memeriksa nda_isi

```sl
ada data = nda_isi

lamen data == nda_isi
  tres
    tulis("Data kosong")
jure_mo
```

### nda_isi dalam Table

```sl
ada profil = {
  nama = "Budi",
  email = nda_isi,
  umur = 25
}

tulis(profil.nama)    # Output: Budi
tulis(profil.email)   # Output: nda_isi
tulis(profil.umur)    # Output: 25
```

### nda_isi dengan Fungsi

```sl
fungsi cari_nama(id)
  lamen id == 1
    tres
      semalik "Budi"
    lamen_no
      semalik nda_isi
  jure_mo
jure_mo

ada nama = cari_nama(1)
tulis(nama)  # Output: Budi

ada nama2 = cari_nama(99)
tulis(nama2)  # Output: nda_isi
```

### nda_isi dalam Perulangan

```sl
ada angka = {1, 2, nda_isi, 4, 5}

untuk i = 1, #angka do
  lamen angka[i] == nda_isi
    tres
      tulis("Nilai kosong di indeks " .. i)
    lamen_no
      tulis("Nilai: " .. angka[i])
  jure_mo
jure_mo
```

### nda_isi dengan Operasi Logika

```sl
ada a = nda_isi
ada b = 10

lamen a == nda_isi dan b != nda_isi
  tres
    tulis("a kosong, b ada nilai")
jure_mo

lamen a != nda_isi atau b != nda_isi
  tres
    tulis("Setidaknya satu memiliki nilai")
jure_mo
```

### nda_isi sebagai Parameter Default

```sl
fungsi sapa(nama = nda_isi)
  lamen nama == nda_isi
    tres
      tulis("Halo, Pengguna!")
    lamen_no
      tulis("Halo, " .. nama .. "!")
  jure_mo
jure_mo

sapa()        # Output: Halo, Pengguna!
sapa("Budi")  # Output: Halo, Budi!
```

### nda_isi dalam Pengembalian Fungsi

```sl
fungsi cari_data(kunci)
  # Simulasi pencarian data
  lamen kunci == "nama"
    tres
      semalik "Data ditemukan"
  jure_mo

  # Jika tidak ditemukan
  semalik nda_isi
jure_mo

ada hasil = cari_data("nama")
tulis(hasil)  # Output: Data ditemukan

ada hasil2 = cari_data("alamat")
tulis(hasil2)  # Output: nda_isi
```

## Keterangan

- `nda_isi` adalah nilai unik yang menandakan ketiadaan data
- Variabel yang dideklarasikan tanpa nilai awal bernilai `nda_isi`
- Fungsi tanpa `semalik` mengembalikan `nda_isi`
- Table dengan indeks yang belum diisi bernilai `nda_isi`
- Gunakan `==` untuk memeriksa apakah suatu nilai adalah `nda_isi`
- Gunakan `!=` untuk memeriksa apakah suatu nilai bukan `nda_isi`

## Perbandingan dengan Nilai Lain

| Nilai | nda_isi | false | 0 | "" |
|-------|---------|-------|---|---|
| Tipe | nil | boolean | number | string |
| Arti | Kosong | Salah | Nol | String kosong |
| boolean | false | false | true | true |

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Nilai kosong | `nda_isi` | `nil` |
| Pemeriksaan | `== nda_isi` | `== nil` |
| Penugasan | `ada x = nda_isi` | `local x = nil` |
