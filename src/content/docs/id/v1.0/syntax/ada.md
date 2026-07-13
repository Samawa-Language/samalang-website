---
title: ada (Lokal)
description: Mendeklarasikan variabel lokal dalam Samalang
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v1.0**. Untuk dokumentasi terkini, lihat [dokumentasi versi terbaru](/id/).
:::

## Ringkasan

`ada` digunakan untuk mendeklarasikan variabel lokal dalam bahasa Samalang. Ini setara dengan `local` di Lua.

## Sintaks

```sl
ada nama_variabel = nilai
```

## Contoh

### Deklarasi Dasar

```sl
ada nama = "Budi"
ada umur = 25
ada tinggi = 175.5
ada aktif = true

tulis(nama)    # Budi
tulis(umur)    # 25
tulis(tinggi)  # 175.5
tulis(aktif)   # true
```

### Tanpa Inisialisasi

```sl
ada nilai
tulis(nilai)  # nda_isi (nil)
```

### Multi Deklarasi

```sl
ada a = 1
ada b = 2
ada c = 3

tulis(a + b + c)  # 6
```

### Dalam Blok Lokal

```sl
ada x = 10

lamen x > 5
  tres
    ada pesan = "x besar"
    tulis(pesan)
jure_mo
```

## Keterangan

- `ada` membuat variabel yang hanya bisa diakses dalam blok tempat ia dideklarasikan
- Nilai awal tanpa inisialisasi adalah `nda_isi` (nil)
- Nama variabel harus dimulai dengan huruf atau garis bawah (`_`)
- Gunakan `#` untuk komentar

## Perbedaan dengan Lua

| Aspek | Samalang (`ada`) | Lua (`local`) |
|-------|-------------------|---------------|
| Deklarasi | `ada x = 1` | `local x = 1` |
| Scope | Lokal ke blok | Lokal ke blok |
| Tanpa nilai awal | `nda_isi` (nil) | `nil` |
