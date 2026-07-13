---
title: "siong (false)"
description: The siong keyword represents a false boolean value in Samalang v2.0
---

## siong (false)

`siong` represents the boolean false value.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Example

```sl
ada active = siong

lamen active == siong tres
    tulis("Not active")
jure_mo
```

### Lua Equivalent

```lua
local active = false

if active == false then
    print("Not active")
end
```
