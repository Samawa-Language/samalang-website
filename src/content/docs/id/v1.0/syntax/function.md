---
title: fungsi (Function)
description: Mendefinisikan dan menggunakan fungsi dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`fungsi` digunakan untuk mendefinisikan fungsi dalam bahasa Samalang. Ini setara dengan `function` di Lua.

## Sintaks

```sl
fungsi nama_fungsi(parameter)
  -- badan fungsi
jure_mo
```

## Contoh

### Fungsi Dasar

```sl
fungsi sapa()
  tulis("Halo, Dunia!")
jure_mo

sapa()  # Output: Halo, Dunia!
```

### Fungsi dengan Parameter

```sl
fungsi sapa nama(nama)
  tulis("Halo, " .. nama .. "!")
jure_mo

sapa("Budi")   # Output: Halo, Budi!
sapa("Andi")   # Output: Halo, Andi!
```

### Fungsi dengan Pengembalian Nilai

```sl
fungsi tambah(a, b)
  semalik a + b
jure_mo

ada hasil = tambah(3, 5)
tulis(hasil)  # Output: 8
```

### Fungsi Rekursif

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

### Fungsi sebagai Nilai

```sl
fungsi buat_pengali(factor)
  semalik fungsi(x)
    semalik x * factor
  jure_mo
jure_mo

ada kali_dua = buat_pengali(2)
tulis(kali_dua(5))  # Output: 10
```

## Parameter Default

```sl
fungsi sapa(nama, sapaan = "Halo")
  tulis(sapaan .. ", " .. nama .. "!")
jure_mo

sapa("Budi")           # Output: Halo, Budi!
sapa("Budi", "Selamat pagi")  # Output: Selamat pagi, Budi!
```

## Keterangan

- Fungsi didefinisikan dengan `fungsi` dan diakhiri dengan `jure_mo`
- Gunakan `semalik` untuk mengembalikan nilai dari fungsi
- Parameter bisa memiliki nilai default
- Fungsi dalam Samalang adalah first-class values (nilai kelas pertama)

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Definisi | `fungsi` | `function` |
| Akhir blok | `jure_mo` | `end` |
| Pengembalian | `semalik` | `return` |
| Penutup | `jure_mo` | `end` |
