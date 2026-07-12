---
title: Operators
description: Arithmetic, comparison, logical, and string operators in SamaLang
---

SamaLang supports all Lua operators. Since the transpiler only replaces keywords, operators work exactly as they do in Lua.

## Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `3 + 2` → `5` |
| `-` | Subtraction | `10 - 4` → `6` |
| `*` | Multiplication | `5 * 3` → `15` |
| `/` | Division | `10 / 3` → `3.333...` |
| `%` | Modulo | `10 % 3` → `1` |
| `^` | Exponent | `2 ^ 3` → `8` |

```bash
ada hasil = (10 + 5) * 2
tulis(hasil) -- Output: 30

ada sisa = 17 % 5
tulis(sisa) -- Output: 2
```

## Comparison Operators

| Operator | Description |
|----------|-------------|
| `==` | Equal to |
| `~=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

```bash
ada umur = 20

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
```

:::note
SamaLang uses `~=` for "not equal" (same as Lua). This differs from many other languages that use `!=`.
:::

## Logical Operators

| Operator | Description | Lua Equivalent |
|----------|-------------|----------------|
| `no` | Logical NOT | `not` |
| `dan` | Logical AND | `and` |
| `atau` | Logical OR | `or` |

```bash
ada x = tutu
ada y = siong

-- no (NOT)
lamen no y tres
    tulis("y adalah siong") -- This runs
jure_mo

-- dan (AND)
lamen x dan y tres
    tulis("Keduanya benar") -- This does NOT run
jure_mo

-- atau (OR)
lamen x atau y tres
    tulis("Salah satu benar") -- This runs
jure_mo
```

## String Concatenation

Use `..` to join strings together:

```bash
ada nama = "Sama"
ada versi = "Lang"
ada gabung = nama .. versi
tulis(gabung) -- Output: SamaLang
```

## Length Operator

Use `#` to get the length of a string or table:

```bash
ada teks = "SamaLang"
tulis(#teks) -- Output: 8

ada buah = {"apel", "mangga", "jeruk"}
tulis(#buah) -- Output: 3
```

:::caution
The `#` operator is also used as the comment marker in SamaLang. When used before a value, it acts as the length operator. When used at the start of a line (or after whitespace), it starts a comment.
:::

## Operator Precedence

From highest to lowest precedence:

1. `^` (exponent)
2. `#`, unary `-`, `no` (NOT)
3. `*`, `/`, `%`
4. `+`, `-`
5. `..` (concatenation)
6. `<`, `>`, `<=`, `>=`, `~=`, `==`
7. `dan`
8. `atau`
