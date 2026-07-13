---
title: "untu (while alt)"
description: The unti keyword is an alternative while loop syntax in Samalang v2.0
---

## unti (while alternative)

`unti` is an alternative syntax for while loops in Samalang v2.0.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Syntax

```
untu <condition> boat
    -- code
jure_mo
```

### Example

```sl
ada i = 1

untu i <= 5 boat
    tulis(i)
    i = i + 1
jure_mo
```

### Lua Equivalent

```lua
local i = 1

while i <= 5 do
    print(i)
    i = i + 1
end
```
