---
title: "boat (do)"
description: The boat keyword marks the start of a block in loops in Samalang v2.0
---

## boat (do)

`boat` marks the start of a code block in loop constructs like `selama`, `untuk`, and `unti`.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Syntax

```
selama <condition> boat
    -- code
jure_mo
```

### Example

```sl
ada i = 0

selama i < 3 boat
    tulis(i)
    i = i + 1
jure_mo
```

### Lua Equivalent

```lua
local i = 0

while i < 3 do
    print(i)
    i = i + 1
end
```
