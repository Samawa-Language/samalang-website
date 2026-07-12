---
title: sampe (until)
description: Repeat-until loop — perulangan repeat-until
---

## Description / Deskripsi

The `sampe` keyword ends a repeat-until loop. The loop runs until the condition becomes `true`.
It is equivalent to `until` in standard Lua.

Keyword `sampe` digunakan untuk mengakhiri perulangan repeat-until. Perulangan berjalan sampai kondisi menjadi `true`.
Setara dengan `until` di Lua.

## Usage / Penggunaan

```bash
boat
    -- code
sampe condition
```

## Examples

### Basic Repeat-Until

```bash
ada i = 1

boat
    tulis(i)
    i = i + 1
sampe i > 5
-- Output: 1, 2, 3, 4, 5
```

### User Input Simulation

```bash
ada jawaban = ""

boat
    jawaban = "benar" -- Simulating input
    tulis("Mencoba...")
sampe jawaban == "benar"

tulis("Berhasil!")
```

### Sum Until Limit

```bash
ada total = 0
ada i = 1

boat
    total = total + i
    i = i + 1
sampe total > 50

tulis("Total melebihi 50: " .. tostring(total))
tulis("Iterasi: " .. tostring(i - 1))
```

:::note
Unlike `untu`/`selama`, the `boat`...`sampe` loop always executes at least once, even if the condition is already `true`.
:::
