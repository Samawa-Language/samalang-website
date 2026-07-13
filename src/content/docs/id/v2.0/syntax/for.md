---
title: untuk (for)
description: Perulangan for
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `untuk` digunakan untuk membuat perulangan for dalam Samalang.
Setara dengan `for` di Lua.

## Penggunaan

### Numerik

```sl
untuk variabel = awal, akhir boat
    -- kode
jure_mo
```

### Numerik dengan Langkah

```sl
untuk variabel = awal, akhir, langkah boat
    -- kode
jure_mo
```

## Contoh

### Dasar

```sl
untuk i = 1, 5 boat
    tulis(i)
jure_mo
-- Output: 1, 2, 3, 4, 5
```

### Dengan Langkah

```sl
untuk i = 0, 20, 5 boat
    tulis(i)
jure_mo
-- Output: 0, 5, 10, 15, 20
```

### Hitung Mundur

```sl
untuk i = 10, 1, -1 boat
    tulis(i)
jure_mo
-- Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

### Iterasi Tabel

```sl
ada buah = {"apel", "mangga", "jeruk", "pisang"}

untuk i = 1, #buah boat
    tulis(i .. ". " .. buah[i])
jure_mo
-- Output:
-- 1. apel
-- 2. mangga
-- 3. jeruk
-- 4. pisang
```

### Nested Loop

```sl
untuk i = 1, 3 boat
    untuk j = 1, 3 boat
        tulis(tostring(i) .. " x " .. tostring(j) .. " = " .. tostring(i * j))
    jure_mo
jure_mo
```

:::note
`untuk` numerik di Samalang berjalan dari nilai awal hingga akhir (inklusif). Gunakan langkah negatif untuk hitung mundur.
:::
