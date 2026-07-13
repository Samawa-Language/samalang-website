---
title: "nda_isi (nil)"
description: The nda_isi keyword represents a null value in Samalang v2.0
---

## nda_isi (nil)

`nda_isi` represents a null/absence of value.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Example

```sl
ada x = nda_isi

lamen x == nda_isi tres
    tulis("x is nil")
jure_mo
```

### Lua Equivalent

```lua
local x = nil

if x == nil then
    print("x is nil")
end
```
