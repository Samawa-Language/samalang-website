---
title: lamen_no (Else)
description: Blok alternatif else dalam percabangan Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`lamen_no` digunakan sebagai blok alternatif dalam percabangan `lamen` dalam Samalang. Ini setara dengan `else` di Lua.

## Sintaks

```sl
lamen kondisi do
  tres
    -- blok jika benar
  lamen_no
    -- blok jika salah
jure_mo
```

## Contoh

### Percabangan Dasar

```sl
ada umur = 15

lamen umur >= 17
  tres
    tulis("Dewasa")
  lamen_no
    tulis("Anak-anak")
jure_mo
```

### Percabangan dengan Angka

```sl
ada nilai = 75

lamen nilai >= 90
  tres
    tulis("Sangat Baik")
  lamen_no
    lamen nilai >= 80
      tres
        tulis("Baik")
      lamen_no
        lamen nilai >= 70
          tres
            tulis("Cukup")
          lamen_no
            tulis("Kurang")
        jure_mo
      jure_mo
    jure_mo
jure_mo
```

### Percabangan dengan Boolean

```sl
ada aktif = true

lamen aktif
  tres
    tulis("Status: Aktif")
  lamen_no
    tulis("Status: Tidak Aktif")
jure_mo
```

### Percabangan dengan String

```sl
ada hari = "Sabtu"

lamen hari == "Sabtu" atau hari == "Minggu"
  tres
    tulis("Hari libur")
  lamen_no
    tulis("Hari kerja")
jure_mo
```

### Percabangan dengan Table

```sl
ada buah = {"apel", "pisang", "ceri"}

lamen #buah > 0
  tres
    tulis("Ada " .. #buah .. " buah")
  lamen_no
    tulis("Tidak ada buah")
jure_mo
```

### Percabangan dengan Fungsi

```sl
fungsi absolut(n)
  lamen n >= 0
    tres
      semalik n
  lamen_no
    semalik -n
  jure_mo
jure_mo

tulis(absolut(-5))  # Output: 5
tulis(absolut(5))   # Output: 5
```

### Percabangan dengan Operator Logika

```sl
ada x = 10
ada y = 20

lamen x > 5 dan y > 15
  tres
    tulis("Kedua kondisi benar")
  lamen_no
    tulis("Salah satu kondisi salah")
jure_mo
```

### Percabangan dengan Ekspresi Komples

```sl
ada skor = 85

lamen skor >= 90
  tres
    tulis("Grade: A")
  lamen_no
    lamen skor >= 80
      tres
        tulis("Grade: B")
    lamen_no
      lamen skor >= 70
        tres
          tulis("Grade: C")
      lamen_no
        tulis("Grade: D")
    jure_mo
  jure_mo
jure_mo
```

## Keterangan

- `lamen_no` ditempatkan di antara blok `tres` dan `jure_mo`
- `lamen_no` hanya dieksekusi jika kondisi `lamen` bernilai `false`
- `lamen_no` bisa diikuti oleh `lamen` lain untuk percabangan bertingkat
- Gunakan `#` untuk komentar

## Percabangan Bertingkat dengan lamen_no

```sl
ada nilai = 85

lamen nilai >= 90
  tres
    tulis("Sangat Baik")
  lamen_no
    lamen nilai >= 80
      tres
        tulis("Baik")
      lamen_no
        lamen nilai >= 70
          tres
            tulis("Cukup")
        jure_mo
    jure_mo
jure_mo
```

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Blok alternatif | `lamen_no` | `else` |
| Percabangan | `lamen ... do` | `if ... then` |
| Blok benar | `tres` | (langsung) |
| Penutup | `jure_mo` | `end` |
