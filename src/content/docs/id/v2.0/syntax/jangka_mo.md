---
title: jangka_mo (break)
description: Hentikan perulangan
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `jangka_mo` digunakan untuk menghentikan perulangan (loop) secara paksa dalam Samalang.
Setara dengan `break` di Lua.

## Penggunaan

```sl
selama kondisi boat
    lamen kondisi_berhenti tres
        jangka_mo
    jure_mo
jure_mo
```

## Contoh

### Break dalam While

```sl
ada i = 0

selama tutu boat
    i = i + 1
    lamen i == 5 tres
        jangka_mo
    jure_mo
    tulis(i)
jure_mo
-- Output: 1, 2, 3, 4
```

### Break dalam For

```sl
untuk i = 1, 10 boat
    lamen i > 5 tres
        jangka_mo
    jure_mo
    tulis(i)
jure_mo
-- Output: 1, 2, 3, 4, 5
```

### Mencari dalam Tabel

```sl
ada buah = {"apel", "mangga", "jeruk", "pisang"}
ada target = "jeruk"
ada ditemukan = siong

untuk i = 1, #buah boat
    lamen buah[i] == target tres
        tulis("Ditemukan di indeks " .. tostring(i))
        ditemukan = tutu
        jangka_mo
    jure_mo
jure_mo

lamen ditemukan == siong tres
    tulis("Tidak ditemukan")
jure_mo
-- Output: Ditemukan di indeks 3
```

### Break dalam Repeat-Until

```sl
ada x = 0

sampe tutu boat
    x = x + 1
    lamen x >= 10 tres
        jangka_mo
    jure_mo
jure_mo
```

:::note
`jangka_mo` hanya keluar dari perulangan paling dalam. Jika ada perulangan bersarang, hanya perulangan terdalam yang dihentikan.
:::
