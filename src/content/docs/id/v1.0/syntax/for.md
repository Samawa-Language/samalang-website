---
title: untuk (For)
description: Perulangan for dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`untuk` digunakan untuk perulangan berbasis penghitung atau iterasi dalam bahasa Samalang. Ini setara dengan `for` di Lua.

## Sintaks

### Perulangan Numerik

```sl
untuk var = awal, akhir do
  -- blok perulangan
jure_mo
```

### Perulangan dengan Langkah

```sl
untuk var = awal, akhir, langkah do
  -- blok perulangan
jure_mo
```

## Contoh

### Perulangan Dasar

```sl
untuk i = 1, 5 do
  tulis("Iterasi: " .. i)
jure_mo
```

**Output:**
```
Iterasi: 1
Iterasi: 2
Iterasi: 3
Iterasi: 4
Iterasi: 5
```

### Perulangan dengan Langkah

```sl
untuk i = 0, 10, 2 do
  tulis(i)
jure_mo
```

**Output:**
```
0
2
4
6
8
10
```

### Perulangan Mundur

```sl
untuk i = 10, 1, -1 do
  tulis(i)
jure_mo
```

**Output:**
```
10
9
8
...
1
```

### Perulangan dengan Table

```sl
ada buah = {"apel", "pisang", "ceri"}

untuk i = 1, #buah do
  tulis(i .. ": " .. buah[i])
jure_mo
```

### Perulangan dengan String

```sl
ada teks = "Halo"

untuk i = 1, #teks do
  tulis(teks[i])
jure_mo
```

### Perulangan Bersarang

```sl
untuk i = 1, 3 do
  untuK j = 1, 3 do
    tulis(i .. " x " .. j .. " = " .. (i * j))
  jure_mo
jure_mo
```

### Perulangan dengan Fungsi

```sl
fungsi cetak_angka(n)
  untuk i = 1, n do
    tulis(i)
  jure_mo
jure_mo

cetak_angka(5)
```

## Keterangan

- `untuk` diikuti oleh nama variabel, nilai awal, dan nilai akhir
- Langkah (step) bersifat opsional, default-nya adalah 1
- Variabel penghitung dideklarasikan secara otomatis dalam blok `untuk`
- Perulangan berakhir ketika penghitung melebihi nilai akhir
- Gunakan `hentikan` (break) untuk keluar dari perulangan
- Gunakan `#` untuk komentar

## Contoh Lanjutan

### Perulangan dengan Break

```sl
untuk i = 1, 10 do
  lamen i == 5
    tres
      tulis("Berhenti di 5!")
      hentikan
  jure_mo
  tulis(i)
jure_mo
```

### Perulangan dengan Kondisi

```sl
untuk i = 1, 20 do
  lamen i % 2 == 0
    tres
      tulis(i .. " adalah bilangan genap")
  jure_mo
jure_mo
```

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Perulangan | `untuk ... do` | `for ... do` |
| Penutup | `jure_mo` | `end` |
| Break | `hentikan` | `break` |
