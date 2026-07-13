---
title: "semalik (return)"
description: The semalik keyword returns a value from a function in Samalang v2.0
---

## semalik (return)

`semalik` returns a value from a function.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Example

```sl
fungsi tambah(a, b)
    semalik a + b
jure_mo

tulis(tambah(3, 5))
```

### Lua Equivalent

```lua
function tambah(a, b)
    return a + b
end

print(tambah(3, 5))
```
