---
title: Tabel
description: Tabel SamaLang — array, dictionary, dan struktur data utama
---

Tabel adalah struktur data utama dan satu-satunya SamaLang (diwarisi dari Lua). Bisa berfungsi sebagai array, dictionary, record, atau objek.

## Membuat Tabel

### Tabel Kosong

```bash
ada data = {}
```

### Array (Kunci Sekuensial)

```bash
ada buah = {"apel", "mangga", "jeruk"}

tulis(buah[1]) -- Output: apel
tulis(buah[2]) -- Output: mangga
tulis(buah[3]) -- Output: jeruk
```

:::note
Array SamaLang menggunakan **indeks mulai dari 1** (seperti Lua). Elemen pertama berada di indeks `1`, bukan `0`.
:::

### Dictionary (Pasangan Kunci-Nilai)

```bash
ada mahasiswa = {
    nama = "Ahmad",
    umur = 20,
    jurusan = "Teknik Informatika"
}

tulis(mahasiswa.nama) -- Output: Ahmad
tulis(mahasiswa["umur"]) -- Output: 20
```

## Mengakses Elemen

```bash
ada buah = {"apel", "mangga", "jeruk"}

-- Notasi bracket
tulis(buah[1])

-- Notasi dot (untuk kunci string)
ada profil = {nama = "Sari", kota = "Jakarta"}
tulis(profil.nama)
```

## Memodifikasi Tabel

```bash
ada buah = {"apel", "mangga"}

-- Tambah elemen
buah[3] = "jeruk"

-- Modifikasi elemen
buah[1] = "pisang"

tulis(buah[1]) -- Output: pisang
```

## Iterasi Tabel

### For Loop Numerik

```bash
ada buah = {"apel", "mangga", "jeruk"}

untuk i = 1, #buah boat
    tulis(buah[i])
jure_mo
```

### Generic For dengan `ipairs` (Sekuensial)

```bash
ada warna = {"merah", "biru", "hijau"}

untuk i, v in ipairs(warna) boat
    tulis(i .. ": " .. v)
jure_mo
```

### Generic For dengan `pairs` (Semua Kunci)

```bash
ada mahasiswa = {nama = "Ahmad", umur = 20}

untuk k, v in pairs(mahasiswa) boat
    tulis(k .. " = " .. tostring(v))
jure_mo
```

## Fungsi Tabel Umum

| Fungsi | Deskripsi | Contoh |
|--------|-----------|--------|
| `table.insert(t, pos, val)` | Sisip di posisi | `table.insert(buah, 2, "mangga")` |
| `table.remove(t, pos)` | Hapus di posisi | `table.remove(buah, 1)` |
| `table.sort(t)` | Urutkan alfabetis | `table.sort(buah)` |
| `ipairs(t)` | Iterator untuk array | `for i, v in ipairs(t) boat` |
| `pairs(t)` | Iterator untuk semua kunci | `for k, v in pairs(t) boat` |
