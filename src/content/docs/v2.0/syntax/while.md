---
title: "selama (while)"
description: The selama keyword creates a while loop in Samalang v2.0
---

## selama (while)

`selama` creates a while loop that runs as long as the condition is true.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Syntax

```
selama <condition> boat
    -- code
jure_mo
```

### Example

```sl
ada i = 1

selama i <= 5 boat
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
