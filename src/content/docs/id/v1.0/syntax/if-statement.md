---
title: lamen (If)
description: Percabangan kondisional dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`lamen` digunakan untuk percabangan kondisional dalam bahasa Samalang. Ini setara dengan `if` di Lua.

## Sintaks

```sl
lamen kondisi do
  tres
    -- blok jika benar
jure_mo
```

## Contoh

### Percabangan Dasar

```sl
ada umur = 20

lamen umur >= 17
  tres
    tulis("Anda sudah dewasa")
jure_mo
```

### Percabangan If-Else

```sl
ada nilai = 75

lamen nilai >= 70
  tres
    tulis("Lulus")
  lamen_no
    tulis("Tidak lulus")
jure_mo
```

### Percabangan Bertingkat

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
          lamen_no
            tulis("Perlu Perbaikan")
        jure_mo
      jure_mo
    jure_mo
jure_mo
```

### Percabangan dengan Ekspresi Logika

```sl
ada umur = 25
ada ktp = true

lamen umur >= 17 dan ktp == true
  tres
    tulis("Diperbolehkan masuk")
  lamen_no
    tulis("Tidak diperbolehkan")
jure_mo
```

### Percabangan Tanpa Else

```sl
ada hari = "Sabtu"

lamen hari == "Sabtu" atau hari == "Minggu"
  tres
    tulis("Hari libur")
jure_mo
```

## Keterangan

- `lamen` diikuti oleh kondisi dan kata kunci `do`
- `tres` menandakan blok yang dieksekusi jika kondisi benar
- `lamen_no` menandakan blok alternatif jika kondisi salah
- Percabangan bisa bertingkat (bertingkat)
- Gunakan `#` untuk komentar

## Operator Perbandingan

| Operator | Arti |
|----------|------|
| `==` | Sama dengan |
| `!=` | Tidak sama dengan |
| `>` | Lebih besar dari |
| `<` | Lebih kecil dari |
| `>=` | Lebih besar atau sama dengan |
| `<=` | Lebih kecil atau sama dengan |

## Operator Logika

| Operator | Arti |
|----------|------|
| `dan` | AND |
| `atau` | OR |
| `tidak` | NOT |

## Perbedaan dengan Lua

| Aspek | Samalang | Lua |
|-------|----------|-----|
| Kondisi | `lamen ... do` | `if ... then` |
| Blok benar | `tres` | (langsung) |
| Blok salah | `lamen_no` | `else` |
| Penutup | `jure_mo` | `end` |
