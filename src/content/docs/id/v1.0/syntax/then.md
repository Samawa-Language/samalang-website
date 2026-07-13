---
title: "tres (then)"
description: The tres keyword marks the start of a conditional block in Samalang v1.0
---

## tres (then)

`tres` is used after `lamen` (if) conditions to mark the start of the code block.

> **Archived:** This is documentation for Samalang v1.0. [View latest docs](/)

### Syntax

```
lamen <condition> tres
    -- code
jure_mo
```

### Example

```sl
ada umur = 20

lamen umur >= 18 tres
    tulis("Dewasa")
jure_mo
```

### Lua Equivalent

```lua
local umur = 20

if umur >= 18 then
    print("Dewasa")
end
```
