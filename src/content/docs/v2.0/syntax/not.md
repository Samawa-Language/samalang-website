---
title: "no (not)"
description: The no keyword negates a boolean expression in Samalang v2.0
---

## no (not)

`no` negates a boolean value.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Example

```sl
ada active = tutu

lamen no active tres
    tulis("Not active")
jure_mo
```

### Lua Equivalent

```lua
local active = true

if not active then
    print("Not active")
end
```
