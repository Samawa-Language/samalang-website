---
title: "sampe (until)"
description: The sampe keyword marks the end of a repeat-until loop in Samalang v2.0
---

## sampe (until)

`sampe` is used with `ulang` (repeat) to create a repeat-until loop.

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Syntax

```
ulang
    -- code
sampe <condition>
```

### Example

```sl
ada i = 1

ulang
    tulis(i)
    i = i + 1
sampe i > 5
```

### Lua Equivalent

```lua
local i = 1

repeat
    print(i)
    i = i + 1
until i > 5
```
