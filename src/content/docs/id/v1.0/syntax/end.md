---
title: jure_mo (End)
description: Penanda akhir blok dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`jure_mo` digunakan sebagai penanda akhir blok dalam Samalang. Ini setara dengan `end` di Lua.

## Sintaks

```sl
-- Setelah deklarasi atau blok
jure_mo
```

## Contoh

### Akhir Fungsi

```sl
fungsi sapa()
  tulis("Halo!")
jure_mo
```

### Akhir Percabangan

```sl
lamen kondisi do
  tres
    tulis("Benar")
  lamen_no
    tulis("Salah")
jure_mo
```

### Akhir Perulangan

```sl
selama kondisi do
  tulis("Perulangan")
jure_mo
```

### Akhir Perulangan For

```sl
untuk i = 1, 5 do
  tulis(i)
jure_mo
```

### Akhir Bersarang

```sl
fungsi proses_data(data)
  lamen data != nda_isi
    tres
      untuk i = 1, #data do
        lamen data[i] > 0
          tres
            tulis(data[i])
        jure_mo
      jure_mo
    lamen_no
      tulis("Data kosong")
  jure_mo
jure_mo
```

### Akhir Tabel Konstruktor

```sl
ada profil = {
  nama = "Budi",
  umur = 25,
  alamat = {
    jalan = "Jl. Merdeka",
    kota = "Jakarta"
  }
}
```

### Akhir Blok dengan Komentar

```sl
fungsi hitung(a, b)
  semalik a + b
jure_mo  # Akhir fungsi hitung
```

### Akhir dalam Nested Function

```sl
fungsi buat_generator(start)
  fungsi increment()
    start = start + 1
    semalik start
  jure_mo

  semalik increment
jure_mo

ada gen = buat_generator(0)
tulis(gen())  # Output: 1
tulis(gen())  # Output: 2
```

### Akhir dalam Table Constructor

```sl
ada data = {
  angka = {1, 2, 3},
  teks = "Hello",
  kosong = nda_isi
}
```

## Keterangan

- `jure_mo` harus ditempatkan di akhir setiap blok yang dibuka
- Blok yang memerlukan `jure_mo`:
  - Fungsi (`fungsi ... jure_mo`)
  - Percabangan (`lamen ... jure_mo`)
  - Perulangan (`selama ... jure_mo`)
  - Perulangan for (`untuk ... jure_mo`)
- Jumlah `jure_mo` harus sesuai dengan jumlah blok yang dibuka
- Gunakan indentasi yang konsisten untuk keterbacaan

## Kesalahan Umum

### Salah: Tanpa jure_mo

```sl
fungsi sapa()
  tulis("Halo!")
# Error: Missing jure_mo
```

### Benar: Dengan jure_mo

```sl
fungsi sapa()
  tulis("Halo!")
jure_mo
```

### Salah: jure_mo Berlebih

```sl
fungsi sapa()
  tulis("Halo!")
jure_mo
jure_mo  # Error: Extra jure_mo
```

### Benar: jure_mo Sesuai

```sl
fungsi sapa()
  tulis("Halo!")
jure_mo  # Hanya satu jure_mo
```

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Akhir blok | `jure_mo` | `end` |
| Fungsi | `fungsi ... jure_mo` | `function ... end` |
| If | `lamen ... jure_mo` | `if ... end` |
| While | `selama ... jure_mo` | `while ... end` |
| For | `untuk ... jure_mo` | `for ... end` |
