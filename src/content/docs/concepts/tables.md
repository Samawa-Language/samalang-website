---
title: Tables
description: SamaLang tables — arrays, dictionaries, and the core data structure
---

Tables are SamaLang's primary and only data structure (inherited from Lua). They can function as arrays, dictionaries, records, or objects.

## Creating Tables

### Empty Table

```bash
ada data = {}
```

### Array (Sequential Keys)

```bash
ada buah = {"apel", "mangga", "jeruk"}

tulis(buah[1]) -- Output: apel
tulis(buah[2]) -- Output: mangga
tulis(buah[3]) -- Output: jeruk
```

:::note
SamaLang arrays are **1-indexed** (like Lua). The first element is at index `1`, not `0`.
:::

### Dictionary (Key-Value Pairs)

```bash
ada mahasiswa = {
    nama = "Ahmad",
    umur = 20,
    jurusan = "Teknik Informatika"
}

tulis(mahasiswa.nama) -- Output: Ahmad
tulis(mahasiswa["umur"]) -- Output: 20
```

## Accessing Elements

```bash
ada buah = {"apel", "mangga", "jeruk"}

-- Bracket notation
tulis(buah[1])

-- Dot notation (for string keys)
ada profil = {nama = "Sari", kota = "Jakarta"}
tulis(profil.nama)
tulis(profil["kota"])
```

## Modifying Tables

```bash
ada buah = {"apel", "mangga"}

-- Add element
buah[3] = "jeruk"

-- Modify element
buah[1] = "pisang"

tulis(buah[1]) -- Output: pisang
```

## Table Length

Use `#` to get the number of elements in a sequential table:

```bash
ada angka = {10, 20, 30}
tulis(#angka) -- Output: 3
```

## Iterating Over Tables

### Numeric For Loop

```bash
ada buah = {"apel", "mangga", "jeruk"}

untuk i = 1, #buah boat
    tulis(buah[i])
jure_mo
```

### Generic For with `ipairs` (Sequential)

```bash
ada warna = {"merah", "biru", "hijau"}

untuk i, v in ipairs(warna) boat
    tulis(i .. ": " .. v)
jure_mo
```

### Generic For with `pairs` (All Keys)

```bash
ada mahasiswa = {nama = "Ahmad", umur = 20}

untuk k, v in pairs(mahasiswa) boat
    tulis(k .. " = " .. tostring(v))
jure_mo
```

## Nested Tables

Tables can contain other tables:

```bash
ada kelas = {
    {nama = "Ahmad", umur = 20},
    {nama = "Sari", umur = 21},
    {nama = "Budi", umur = 19}
}

tulis(kelas[1].nama) -- Output: Ahmad
tulis(kelas[2].umur) -- Output: 21
```

## Common Table Functions

| Function | Description | Example |
|----------|-------------|---------|
| `table.insert(t, pos, val)` | Insert at position | `table.insert(buah, 2, "mangga")` |
| `table.remove(t, pos)` | Remove at position | `table.remove(buah, 1)` |
| `table.sort(t)` | Sort alphabetically | `table.sort(buah)` |
| `ipairs(t)` | Iterator for arrays | `for i, v in ipairs(t) boat` |
| `pairs(t)` | Iterator for all keys | `for k, v in pairs(t) boat` |
