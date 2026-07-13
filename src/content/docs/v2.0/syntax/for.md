---
title: "untuk (for)"
description: The untuk keyword creates a numeric for loop in Samalang v2.0
---

## untuk (for)

`untuk` creates a numeric for loop.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Syntax

```
untuk <var> = <start>, <end>, <step> boat
    -- code
jure_mo
```

### Example

```sl
untuk i = 1, 5, 1 boat
    tulis(i)
jure_mo
```

### Lua Equivalent

```lua
for i = 1, 5, 1 do
    print(i)
end
```
