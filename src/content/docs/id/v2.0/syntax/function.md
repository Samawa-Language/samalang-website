---
title: fungsi (function)
description: Definisi fungsi
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

## Deskripsi

Keyword `fungsi` digunakan untuk mendefinisikan fungsi baru dalam Samalang.
Setara dengan `function` di Lua.

## Penggunaan

```sl
fungsi nama_fungsi(parameter)
    -- kode
    semalik nilai
jure_mo
```

## Contoh

### Fungsi Sederhana

```sl
fungsi sapa(nama)
    tulis("Halo, " .. nama .. "!")
jure_mo

sapa("Ahmad") -- Output: Halo, Ahmad!
```

### Fungsi dengan Nilai Kembali

```sl
fungsi tambah(a, b)
    semalik a + b
jure_mo

ada hasil = tambah(3, 5)
tulis(hasil) -- Output: 8
```

### Fungsi Tanpa Parameter

```sl
fungsi sapa_dunia()
    tulis("Halo, Dunia!")
jure_mo

sapa_dunia() -- Output: Halo, Dunia!
```

### Fungsi Rekursif

```sl
fungsi faktorial(n)
    lamen n <= 1 tres
        semalik 1
    jure_mo
    semalik n * faktorial(n - 1)
jure_mo

tulis(faktorial(5)) -- Output: 120
```

### Fungsi sebagai Nilai

```sl
ada operasi = fungsi(a, b)
    semalik a * b
jure_mo

tulis(operasi(4, 5)) -- Output: 20
```

:::note
Fungsi di Samalang adalah first-class value, sama seperti di Lua. Anda bisa menyimpan fungsi dalam variabel, meneruskannya sebagai argumen, dan mengembalikannya dari fungsi lain.
:::
