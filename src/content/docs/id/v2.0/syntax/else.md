---
title: lamen_no (else)
description: Alternatif kondisi pada percabangan
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `lamen_no` digunakan sebagai alternatif ketika kondisi `lamen` bernilai `siong` (false).
Setara dengan `else` di Lua.

## Penggunaan

```sl
lamen kondisi tres
    -- kode jika kondisi benar
jure_mo
lamen_no
    -- kode jika kondisi salah
jure_mo
```

## Contoh

### Dasar

```sl
ada umur = 15

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
lamen_no
    tulis("Anak-anak")
jure_mo
-- Output: Anak-anak
```

### Dengan Perbandingan

```sl
ada nilai = 65

lamen nilai >= 70 tres
    tulis("Lulus")
jure_mo
lamen_no
    tulis("Tidak lulus")
jure_mo
-- Output: Tidak lulus
```

### Logika Sederhana

```sl
ada hari = "Minggu"

lamen hari == "Sabtu" atau hari == "Minggu" tres
    tulis("Hari libur")
jure_mo
lamen_no
    tulis("Hari kerja")
jure_mo
-- Output: Hari libur
```

:::note
`lamen_no` adalah ekuivalen Samawa dari `else` di Lua. Blok `lamen_no` dijalankan hanya jika semua kondisi `lamen` dan `lamen_no_kebali` sebelumnya bernilai `siong`.
:::
