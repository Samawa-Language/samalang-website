---
title: unti (while alternatif)
description: Perulangan while alternatif
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `unti` adalah alternatif dari `selama` untuk perulangan while dalam Samalang.
Berfungsi sama dengan `selama` tetapi dengan sintaks alternatif.

## Penggunaan

```sl
unti kondisi boat
    -- kode
jure_mo
```

## Contoh

### Dasar

```sl
ada i = 1

unti i <= 5 boat
    tulis(i)
    i = i + 1
jure_mo
-- Output: 1, 2, 3, 4, 5
```

### Hitung Mundur

```sl
ada hitung = 10

unti hitung > 0 boat
    tulis(hitung)
    hitung = hitung - 1
jure_mo
-- Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

### Dengan Kondisi Kompleks

```sl
ada data = {10, 20, 30, 40, 50}
ada indeks = 1

unti indeks <= #data boat
    tulis("Data[" .. tostring(indeks) .. "] = " .. tostring(data[indeks]))
    indeks = indeks + 1
jure_mo
```

:::note
`unti` berfungsi sama seperti `selama` (while). Pilih salah satu sesuai preferensi gaya penulisan kode Anda.
:::
