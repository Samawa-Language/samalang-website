---
title: sampe (until)
description: Perulangan repeat-until
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `sampe` digunakan untuk perulangan repeat-until dalam Samalang. Blok kode dijalankan berulang kali hingga kondisi menjadi `tutu` (true).
Setara dengan `repeat` di Lua (dengan `until` di akhir).

## Penggunaan

```sl
sampe kondisi boat
    -- kode
jure_mo
```

:::note
Berbeda dengan Lua yang menggunakan `repeat ... until`, Samalang menggunakan `sampe ... jure_mo`. Kondisi diperiksa di awal seperti perulangan while, tetapi blok dijalankan setidaknya sekali.
:::

## Contoh

### Dasar

```sl
ada i = 0

sampe i >= 5 boat
    i = i + 1
    tulis(i)
jure_mo
-- Output: 1, 2, 3, 4, 5
```

### Input Pengguna

```sl
ada jawaban = ""

sampe jawaban == "ya" boat
    jawaban = "ya" -- simulasi input
    tulis("Jawaban diterima")
jure_mo
```

### Hitung Mundur

```sl
ada hitung = 5

sampe hitung <= 0 boat
    tulis(hitung)
    hitung = hitung - 1
jure_mo
-- Output: 5, 4, 3, 2, 1, 0
```

### Dengan Break

```sl
ada x = 0

sampe tutu boat
    x = x + 1
    lamen x > 10 tres
        jangka_mo
    jure_mo
jure_mo
-- x akan mencapai 11 sebelum break
```

:::tip
Gunakan `sampe` ketika Anda ingin blok kode dijalankan setidaknya sekali sebelum kondisi diperiksa. Ini berbeda dari `selama` yang memeriksa kondisi terlebih dahulu.
:::
