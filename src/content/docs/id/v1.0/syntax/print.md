---
title: tulis (Print)
description: Mencetak output dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`tulis` digunakan untuk mencetak nilai ke konsol dalam bahasa Samalang. Ini setara dengan `print` di Lua.

## Sintaks

```sl
tulis(nilai)
```

## Contoh

### Mencetak Teks

```sl
tulis("Halo, Dunia!")
tulis("Selamat datang di Samalang")
```

### Mencetak Angka

```sl
tulis(42)
tulis(3.14)
tulis(-100)
```

### Mencetak Boolean

```sl
tulis(true)
tulis(false)
```

### Mencetak Variabel

```sl
ada nama = "Budi"
ada umur = 25
ada aktif = true

tulis(nama)    # Output: Budi
tulis(umur)    # Output: 25
tulis(aktif)   # Output: true
```

### Mencetak Ekspresi

```sl
ada a = 10
ada b = 5

tulis(a + b)      # Output: 15
tulis(a * b)      # Output: 50
tulis(a > b)      # Output: true
tulis(a == b)     # Output: false
```

### Mencetak String dengan Operasi Penggabungan

```sl
ada nama = "Samalang"
ada versi = "1.0"

tulis("Bahasa " .. nama .. " versi " .. versi)
# Output: Bahasa Samalang versi 1.0
```

### Mencetak Nilai Nol

```sl
ada nilai = nda_isi
tulis(nilai)  # Output: nda_isi
```

### Mencetak dengan Format

```sl
ada nama = "Andi"
ada umur = 20

tulis("Nama: " .. nama .. ", Umur: " .. umur .. " tahun")
# Output: Nama: Andi, Umur: 20 tahun
```

### Mencetak dalam Perulangan

```sl
untuk i = 1, 5 do
  tulis("Baris ke-" .. i)
jure_mo
```

**Output:**
```
Baris ke-1
Baris ke-2
Baris ke-3
Baris ke-4
Baris ke-5
```

### Mencetak Hasil Fungsi

```sl
fungsi tambah(a, b)
  semalik a + b
jure_mo

tulis(tambah(3, 7))  # Output: 10
```

## Keterangan

- `tulis` menerima satu atau lebih parameter
- Setiap parameter dipisahkan dengan koma
- Output ditampilkan di konsol atau terminal
- Gunakan `..` untuk menggabungkan string
- Nilai `nda_isi` ditampilkan sebagai "nda_isi"

## Contoh Lanjutan

### Mencetak Table

```sl
ada buah = {"apel", "pisang", "ceri"}

tulis(buah[1])  # Output: apel
tulis(buah[2])  # Output: pisang
tulis(buah[3])  # Output: ceri
```

### Mencetak Nested Table

```sl
ada mahasiswa = {
  nama = "Budi",
  umur = 21,
  nilai = 85
}

tulis(mahasiswa.nama)   # Output: Budi
tulis(mahasiswa.umur)   # Output: 21
tulis(mahasiswa.nilai)  # Output: 85
```

### Mencetak dengan Kondisi

```sl
ada nilai = 85

lamen nilai >= 70
  tres
    tulis("Status: Lulus")
  lamen_no
    tulis("Status: Tidak Lulus")
jure_mo
```

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Fungsi cetak | `tulis` | `print` |
| Output | Konsol/terminal | stdout |
| Pemisah | `..` (konkatenasi) | `..` (konkatenasi) |
