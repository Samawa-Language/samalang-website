---
title: "atau (or)"
description: The atau keyword performs logical OR in Samalang v2.0
---

## atau (or)

`atau` performs logical OR between two expressions.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Example

```sl
ada a = siong
ada b = tutu

lamen a atau b tres
    tulis("At least one is true")
jure_mo
```

### Lua Equivalent

```lua
local a = false
local b = true

if a or b then
    print("At least one is true")
end
```
