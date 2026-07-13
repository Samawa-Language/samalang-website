---
title: "dan (and)"
description: The dan keyword performs logical AND in Samalang v2.0
---

## dan (and)

`dan` performs logical AND between two expressions.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Example

```sl
ada umur = 25
ada nama = "Rudi"

lamen umur >= 18 dan nama == "Rudi" tres
    tulis("Match!")
jure_mo
```

### Lua Equivalent

```lua
local umur = 25
local nama = "Rudi"

if umur >= 18 and nama == "Rudi" then
    print("Match!")
end
```
