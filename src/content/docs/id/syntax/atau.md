---
title: atau (or)
description: Operator logika OR
---

## Description / Deskripsi

The `atau` keyword is the logical OR operator in SamaLang. It returns `true` if at least one operand is `true`.
It is equivalent to `or` in standard Lua.

Keyword `atau` adalah operator logika OR dalam SamaLang. Menghasilkan `true` jika setidaknya satu operand bernilai `true`.
Setara dengan `or` di Lua.

## Usage / Penggunaan

```bash
lamen operand1 atau operand2 tres
    -- kode berjalan jika setidaknya satu benar
jure_mo
```

## Examples

### OR Dasar

```bash
ada a = tutu
ada b = siong

lamen a atau b tres
    tulis("Minimal satu benar")
jure_mo
-- Output: Minimal satu benar
```

### Pola Nilai Default

```bash
ada nama = nda_isi
nama = atau nama "Pengguna"
tulis(nama) -- Output: Pengguna
```

### Dengan Perbandingan

```bash
ada suhu = 38

lamen suhu > 37 atau suhu < 35 tres
    tulis("Suhu tidak normal")
jure_mo
-- Output: Suhu tidak normal
```

### Evaluasi Short-Circuit

```bash
fungsi cek(n)
    tulis("Fungsi dipanggil")
    semalik n > 0
jure_mo

ada nilai = -1

-- cek(nilai) tidak dipanggil karena kondisi pertama true
lamen nilai < 0 atau cek(nilai) tres
    tulis("Negatif")
jure_mo
-- Output:
-- Negatif
-- (cek() tidak dipanggil karena operan pertama true)
```

:::note
`atau` adalah ekuivalen Samawa dari `or` di Lua. Menggunakan evaluasi short-circuit — jika operan pertama `true`, operan kedua tidak dievaluasi.
:::
