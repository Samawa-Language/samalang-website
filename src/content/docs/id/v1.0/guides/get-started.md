---
title: Memulai
description: Mulai menggunakan Samalang dalam waktu singkat
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Apa itu Samalang?

Samalang adalah bahasa pemrograman ringan yang terinspirasi dari Lua untuk pembuatan ekstensi Zed. Dengan sintaks yang minimalis dan mudah dipahami, Anda dapat memulai pengembangan ekstensi dalam hitungan menit.

## Persyaratan

- **Zed** (versi terbaru)
- **Node.js** v18 atau lebih baru

## Langkah Pertama

### 1. Buat File Pertama Anda

Buat file baru dengan ekstensi `.sl`:

```sl
# program_pertama.sl
tulis("Halo dari Samalang!")
```

### 2. Jalankan Program

Gunakan CLI Samalang untuk menjalankan program:

```bash
samalang run program_pertama.sl
```

### 3. Pahami Output

```
Halo dari Samalang!
```

## Konsep Dasar

### Variabel

Gunakan `ada` untuk mendeklarasikan variabel:

```sl
ada nama = "Samalang"
ada versi = 1.0
ada aktif = true

tulis(nama)
tulis(versi)
```

### Fungsi

Gunakan `fungsi` untuk mendefinisikan fungsi:

```sl
fungsi sapa(nama)
  semalik "Halo, " .. nama .. "!"
jure_mo

tulis(sapa("Dunia"))
```

### Percabangan

Gunakan `lamen` untuk percabangan kondisional:

```sl
ada nilai = 85

lamen nilai >= 70
  tres
    tulis("Lulus")
  lamen_no
    tulis("Tidak lulus")
jure_mo
```

### Perulangan

Gunakan `selama` atau `untuk` untuk perulangan:

```sl
# Perulangan while
ada i = 1
selama i <= 5 do
  tulis("Perulangan: " .. i)
  i = i + 1
jure_mo

# Perulangan for
untuk j = 1, 5 do
  tulis("For: " .. j)
jure_mo
```

## Langkah Selanjutnya

- Pelajari [instalasi](/id/v1.0/guides/installation) untuk pengaturan lanjutan
- Lihat [tipe data](/id/v1.0/concepts/data-types) untuk memahami jenis data
- Eksplorasi [sintaks](/id/v1.0/syntax/ada) untuk detail setiap kata kunci
