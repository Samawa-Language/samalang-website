---
title: semalik (Return)
description: Mengembalikan nilai dari fungsi dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`semalik` digunakan untuk mengembalikan nilai dari fungsi dalam bahasa Samalang. Ini setara dengan `return` di Lua.

## Sintaks

```sl
semalik nilai
```

## Contoh

### Pengembalian Nilai Dasar

```sl
fungsi sapa()
  semalik "Halo, Dunia!"
jure_mo

tulis(sapa())  # Output: Halo, Dunia!
```

### Pengembalian Angka

```sl
fungsi tambah(a, b)
  semalik a + b
jure_mo

tulis(tambah(3, 5))  # Output: 8
```

### Pengembalian Boolean

```sl
fungsi ganjil(n)
  semalik n % 2 != 0
jure_mo

tulis(ganjil(7))   # Output: true
tulis(ganjil(4))   # Output: false
```

### Pengembalian String

```sl
fungsi buat_sapa(nama)
  semalik "Halo, " .. nama .. "!"
jure_mo

tulis(buat_sapa("Budi"))  # Output: Halo, Budi!
```

### Pengembalian Multi Nilai

```sl
fungsi bagi(a, b)
  semalik a / b, a % b
jure_mo

ada hasil, sisa = bagi(10, 3)
tulis("Hasil: " .. hasil)  # Output: Hasil: 3.333...
tulis("Sisa: " .. sisa)    # Output: Sisa: 1
```

### Pengembalian dari Percabangan

```sl
fungsi absolut(n)
  lamen n >= 0
    tres
      semalik n
    lamen_no
      semalik -n
  jure_mo
jure_mo

tulis(absolut(-5))  # Output: 5
tulis(absolut(5))   # Output: 5
```

### Pengembalian Rekursif

```sl
fungsi faktorial(n)
  lamen n <= 1
    tres
      semalik 1
    lamen_no
      semalik n * faktorial(n - 1)
  jure_mo
jure_mo

tulis(faktorial(5))  # Output: 120
```

### Pengembalian Table

```sl
fungsi buat_profil(nama, umur)
  semalik {
    nama = nama,
    umur = umur,
    aktif = true
  }
jure_mo

ada profil = buat_profil("Budi", 25)
tulis(profil.nama)   # Output: Budi
tulis(profil.umur)   # Output: 25
```

### Pengembalian Fungsi

```sl
fungsi buat_pengali(factor)
  semalik fungsi(x)
    semalik x * factor
  jure_mo
jure_mo

ada kali_dua = buat_pengali(2)
tulis(kali_dua(5))  # Output: 10
```

### Pengembalian Tanpa Nilai

```sl
fungsi cetak_status(status)
  lamen status
    tres
      tulis("Aktif")
    lamen_no
      tulis("Tidak aktif")
  jure_mo
  # Tidak ada semalik, fungsi mengembalikan nda_isi
jure_mo

cetak_status(true)  # Output: Aktif
```

## Keterangan

- `semalik` diikuti oleh nilai yang akan dikembalikan
- Fungsi bisa mengembalikan beberapa nilai dengan memisahkan koma
- Jika tidak ada `semalik`, fungsi mengembalikan `nda_isi` (nil)
- `semalik` bisa digunakan di mana saja dalam fungsi
- Setelah `semalik`, kode setelahnya tidak akan dieksekusi

## Contoh Lanjutan

### Fungsi dengan Beberapa Pengembalian

```sl
fungsi statistik(data)
  ada total = 0
  ada jumlah = #data

  untuk i = 1, jumlah do
    total = total + data[i]
  jure_mo

  ada rata_rata = total / jumlah

  semalik total, rata_rata, jumlah
jure_mo

ada data = {10, 20, 30, 40, 50}
ada total, rata, jumlah = statistik(data)

tulis("Total: " .. total)      # Output: Total: 150
tulis("Rata-rata: " .. rata)   # Output: Rata-rata: 30
tulis("Jumlah: " .. jumlah)    # Output: Jumlah: 5
```

### Fungsi dengan Pengembalian Bersyarat

```sl
fungsi cari_bilangan(arr, target)
  untuk i = 1, #arr do
    lamen arr[i] == target
      tres
        semalik i, true
    jure_mo
  jure_mo

  semalik -1, false
jure_mo

ada angka = {10, 20, 30, 40, 50}
ada indeks, ditemukan = cari_bilangan(angka, 30)

lamen ditemukan
  tres
    tulis("Ditemukan di indeks: " .. indeks)
  lamen_no
    tulis("Tidak ditemukan")
jure_mo
```

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Pengembalian | `semalik` | `return` |
| Multi nilai | `semalik a, b` | `return a, b` |
| Tanpa nilai | Tidak ada `semalik` | Tidak ada `return` |
