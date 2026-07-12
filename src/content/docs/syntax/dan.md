---
title: "dan (and)"
description: Logical AND operator — operator logika AND
---

## Description / Deskripsi

The `dan` keyword is the logical AND operator in SamaLang. It returns `true` only if both operands are `true`.
It is equivalent to `and` in standard Lua.

Keyword `dan` adalah operator logika AND dalam SamaLang. Menghasilkan `true` hanya jika kedua operand bernilai `true`.
Setara dengan `and` di Lua.

## Usage / Penggunaan

```bash
lamen operand1 dan operand2 tres
    -- code runs when both are true
jure_mo
```

## Examples

### Basic AND

```bash
ada a = tutu
ada b = tutu

lamen a dan b tres
    tulis("Keduanya benar")
jure_mo
-- Output: Keduanya benar
```

### With Comparison

```bash
ada umur = 25
ada pekerjaan = "aktif"

lamen umur >= 18 dan pekerjaan == "aktif" tres
    tulis("Layak mendapat pinjaman")
jure_mo
-- Output: Layak mendapat pinjaman
```

### Short-Circuit Evaluation

```bash
fungsi cek(n)
    tulis("Fungsi dipanggil")
    semalik n > 0
jure_mo

ada nilai = 0

-- cek(nilai) tidak dipanggil karena kondisi pertama false
lamen nilai > 0 dan cek(nilai) tres
    tulis("Positif")
jure_mo
-- Output: (nothing, cek() not called)
```

### Chaining Conditions

```bash
ada x = 10

lamen x > 5 dan x < 20 dan x ~= 15 tres
    tulis("x valid")
jure_mo
-- Output: x valid
```

:::note
`dan` is the Samawa equivalent of Lua's `and`. It uses short-circuit evaluation — if the first operand is `false`, the second operand is not evaluated.
:::
