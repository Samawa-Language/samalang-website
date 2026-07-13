---
title: atau (or)
description: Operator logika OR
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `atau` adalah operator logika OR dalam Samalang. Menghasilkan `true` jika setidaknya satu operand bernilai `true`.
Setara dengan `or` di Lua.

## Penggunaan

```sl
lamen operand1 atau operand2 tres
    -- kode berjalan jika setidaknya satu benar
jure_mo
```

## Contoh

### OR Dasar

```sl
ada a = tutu
ada b = siong

lamen a atau b tres
    tulis("Minimal satu benar")
jure_mo
-- Output: Minimal satu benar
```

### Pola Nilai Default

```sl
ada nama = nda_isi
nama = atau nama "Pengguna"
tulis(nama) -- Output: Pengguna
```

### Dengan Perbandingan

```sl
ada suhu = 38

lamen suhu > 37 atau suhu < 35 tres
    tulis("Suhu tidak normal")
jure_mo
-- Output: Suhu tidak normal
```

### Evaluasi Short-Circuit

```sl
fungsi cek(n)
    tulis("Fungsi dipanggil")
    semalik n > 0
jure_mo

ada nilai = -1

-- cek(nilai) tidak dipanggil karena kondisi pertama true
lamen nilai < 0 atau cek(nilai) tres
    tulis("Negatif")
jure_mo
-- Output:
-- Negatif
-- (cek() tidak dipanggil karena operan pertama true)
```

:::note
`atau` adalah ekuivalen Samawa dari `or` di Lua. Menggunakan evaluasi short-circuit — jika operan pertama `true`, operan kedua tidak dievaluasi.
:::
