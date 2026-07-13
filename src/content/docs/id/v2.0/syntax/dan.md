---
title: dan (and)
description: Operator logika AND
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `dan` adalah operator logika AND dalam Samalang. Menghasilkan `true` hanya jika kedua operand bernilai `true`.
Setara dengan `and` di Lua.

## Penggunaan

```sl
lamen operand1 dan operand2 tres
    -- kode berjalan jika keduanya benar
jure_mo
```

## Contoh

### AND Dasar

```sl
ada a = tutu
ada b = tutu

lamen a dan b tres
    tulis("Keduanya benar")
jure_mo
-- Output: Keduanya benar
```

### Dengan Perbandingan

```sl
ada umur = 25
ada pekerjaan = "aktif"

lamen umur >= 18 dan pekerjaan == "aktif" tres
    tulis("Layak mendapat pinjaman")
jure_mo
-- Output: Layak mendapat pinjaman
```

### Evaluasi Short-Circuit

```sl
fungsi cek(n)
    tulis("Fungsi dipanggil")
    semalik n > 0
jure_mo

ada nilai = 0

-- cek(nilai) tidak dipanggil karena kondisi pertama false
lamen nilai > 0 dan cek(nilai) tres
    tulis("Positif")
jure_mo
-- Output: (tidak ada, cek() tidak dipanggil)
```

### Pengkondisian Bertingkat

```sl
ada x = 10

lamen x > 5 dan x < 20 dan x ~= 15 tres
    tulis("x valid")
jure_mo
-- Output: x valid
```

:::note
`dan` adalah ekuivalen Samawa dari `and` di Lua. Menggunakan evaluasi short-circuit — jika operan pertama `false`, operan kedua tidak dievaluasi.
:::
