---
title: lamen_no_kebali (elseif)
description: Kondisi tambahan pada percabangan
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `lamen_no_kebali` digunakan untuk menambahkan kondisi alternatif dalam rantai percabangan.
Setara dengan `elseif` di Lua.

## Penggunaan

```sl
lamen kondisi1 tres
    -- kode untuk kondisi1
jure_mo
lamen_no_kebali kondisi2 tres
    -- kode untuk kondisi2
jure_mo
lamen_no
    -- kode default
jure_mo
```

## Contoh

### Grade Nilai

```sl
ada nilai = 85

lamen nilai >= 90 tres
    tulis("Grade: A")
jure_mo
lamen_no_kebali nilai >= 80 tres
    tulis("Grade: B")
jure_mo
lamen_no_kebali nilai >= 70 tres
    tulis("Grade: C")
jure_mo
lamen_no_kebali nilai >= 60 tres
    tulis("Grade: D")
jure_mo
lamen_no
    tulis("Grade: F")
jure_mo
-- Output: Grade: B
```

### Kategorisasi Umur

```sl
ada umur = 25

lamen umur < 13 tres
    tulis("Anak-anak")
jure_mo
lamen_no_kebali umur < 18 tres
    tulis("Remaja")
jure_mo
lamen_no_kebali umur < 60 tres
    tulis("Dewasa")
jure_mo
lamen_no
    tulis("Lansia")
jure_mo
-- Output: Dewasa
```

### Kondisi Bertingkat

```sl
ada suhu = 40

lamen suhu > 50 tres
    tulis("Sangat berbahaya!")
jure_mo
lamen_no_kebali suhu > 40 tres
    tulis("Sangat panas")
jure_mo
lamen_no_kebali suhu > 30 tres
    tulis("Panas")
jure_mo
lamen_no_kebali suhu > 20 tres
    tulis("Hangat")
jure_mo
lamen_no
    tulis("Dingin")
jure_mo
-- Output: Sangat panas
```

:::note
`lamen_no_kebali` adalah ekuivalen Samawa dari `elseif` di Lua. Kondisi dievaluasi secara berurutan dari atas ke bawah, dan blok pertama yang kondisinya benar akan dijalankan.
:::
