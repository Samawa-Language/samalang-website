---
title: Mulai Belajar
description: Mulai berprogram dengan Samalang v2.0 — tutorial untuk pemula
---

:::caution[Dokumentasi Arsip]
Ini adalah dokumentasi arsip untuk **Samalang v2.0**. Untuk dokumentasi versi terbaru, kunjungi [beranda Samalang](/id/).
:::

Selamat datang di **Samalang v2.0** — di mana pemrograman modern bertemu budaya Samawa.

Samalang adalah bahasa pemrograman yang dibangun di atas **Lua**, menggunakan kata kunci dari **bahasa Samawa**. Menawarkan lingkungan yang powerful dan ringan dengan identitas budaya yang bermakna.

## Mengapa Samalang?

* **Logika Mudah:** Menyederhanakan konsep pemrograman yang kompleks untuk pemula.
* **Identitas Budaya:** Mengintegrasikan kosakata dan nilai-nilai Samawa dalam pembelajaran.
* **Berbasis Lua:** Manfaatkan kecepatan dan efisiensi dari engine scripting kelas dunia.
* **Kompatibilitas Penuh Lua:** Akses seluruh standard library dan ekosistem Lua.

## Contoh Kode

```sl
# Sapaan tradisional
tulis("Salam Sarea!")

# Variabel lokal
ada nama = "Samalang"
ada versi = 2.0
tulis(nama .. " v" .. tostring(versi))

# Fungsi
fungsi tambah(a, b)
    semalik a + b
jure_mo

tulis(tambah(3, 5)) -- Output: 8
```

## Perjalanan Belajar

### Dasar dan Warisan
Pahami sintaks dasar Samalang dan bagaimana ia mengadopsi konsep-konsep tradisional Samawa ke dalam struktur kode.

### Logika dan Pengambilan Keputusan
Pelajari bagaimana bahasa ini menangani logika melalui kondisional dan perulangan, mencerminkan cara kita memecahkan masalah dalam kehidupan sehari-hari.

### Data Terstruktur dengan Tabel
Eksplorasi bagaimana informasi diorganisir menggunakan Tabel — inti yang fleksibel dan powerful dari engine Lua di bawahnya.

### Jembatan Teknis
Temukan bagaimana Samalang berinteraksi dengan runtime Lua, memungkinkan Anda menggunakan tools kelas profesional sambil mempertahankan sintaks budaya yang familiar.

---

## Visi

Tujuan Samalang adalah memberdayakan pengembang untuk membangun teknologi modern tanpa kehilangan akar budaya mereka. Dengan mempelajari bahasa ini, Anda tidak hanya menulis kode; Anda membawa semangat Samawa ke masa depan dunia digital.

## Siap Menjelajah?

<CardGrid>
  <LinkCard
    title="Tipe Data"
    description="Pelajari tentang angka, string, boolean, nil, dan tabel."
    href="/id/v20/concepts/data-types"
  />
  <LinkCard
    title="Referensi Sintaks"
    description="Semua 21 kata kunci Samawa dengan contoh."
    href="/id/v20/syntax/ada"
  />
  <LinkCard
    title="Operator"
    description="Operator aritmatika, perbandingan, logika, dan string."
    href="/id/v20/concepts/operators"
  />
  <LinkCard
    title="Instalasi"
    description="Pasang Samalang di editor Anda."
    href="/id/v20/guides/installation"
  />
</CardGrid>
