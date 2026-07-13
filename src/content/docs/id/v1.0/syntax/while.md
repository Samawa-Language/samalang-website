---
title: selama (While)
description: Perulangan while dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`selama` digunakan untuk perulangan berbasis kondisi dalam bahasa Samalang. Ini setara dengan `while` di Lua.

## Sintaks

```sl
selama kondisi do
  -- blok perulangan
jure_mo
```

## Contoh

### Perulangan Dasar

```sl
ada i = 1

selama i <= 5 do
  tulis("Iterasi: " .. i)
  i = i + 1
jure_mo
```

### Perulangan dengan Akumulator

```sl
ada total = 0
ada i = 1

selama i <= 10 do
  total = total + i
  i = i + 1
jure_mo

tulis("Total: " .. total)  # Output: Total: 55
```

### Perulangan Tak Terbatas (dengan Break)

```sl
ada counter = 0

selama true do
  counter = counter + 1
  lamen counter == 5
    tres
      tulis("Berhenti di 5")
      hentikan
  jure_mo
jure_mo
```

### Perulangan dengan Kondisi Kompleks

```sl
ada angka = 100

selama angka > 1 do
  tulis(angka)
  angka = angka / 2
jure_mo
```

### Perulangan Bersarang

```sl
ada i = 1

selama i <= 3 do
  ada j = 1
  selama j <= 3 do
    tulis(i .. " x " .. j .. " = " .. (i * j))
    j = j + 1
  jure_mo
  i = i + 1
jure_mo
```

## Keterangan

- `selama` diikuti oleh kondisi dan kata kunci `do`
- Perulangan berlanjut selama kondisi bernilai `true`
- Gunakan `hentikan` (break) untuk keluar dari perulangan
- Pastikan kondisi perulangan bisa bernilai `false` untuk menghindari perulangan tak terbatas
- Gunakan `#` untuk komentar

## Contoh dengan `hentikan`

```sl
ada bilangan_prima = {2, 3, 5, 7, 11, 13}
ada i = 1

selama i <= #bilangan_prima do
  tulis("Prima: " .. bilangan_prima[i])
  lamen bilangan_prima[i] > 10
    tres
      tulis("Berhenti karena bilangan terlalu besar")
      hentikan
  jure_mo
  i = i + 1
jure_mo
```

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Kondisi | `selama ... do` | `while ... do` |
| Penutup | `jure_mo` | `end` |
| Break | `hentikan` | `break` |
