---
title: jure_mo (end)
description: End a code block in SamaLang v2.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v2.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `jure_mo` keyword ends a block of code in SamaLang. It is used to close `lamen` (if), `fungsi` (function), `selama` (while), `untuk` (for), and other block structures.
It is equivalent to `end` in standard Lua.

## Syntax

```sl
-- End an if block
lamen condition tres
    -- code
jure_mo

-- End a function
fungsi nama()
    -- code
jure_mo
```

## Examples

### Closing Different Blocks

```sl
-- If block
lamen tutu tres
    tulis("A")
jure_mo

-- Function block
fungsi hello()
    tulis("Hello!")
jure_mo

-- While block
ada i = 1
unti i <= 5 boat
    tulis(i)
    i = i + 1
jure_mo
```

### Nested Blocks

```sl
fungsi proses(n)
    lamen n > 0 tres
        untuk i = 1, n boat
            tulis("Iterasi " .. tostring(i))
        jure_mo
    jure_mo
jure_mo

proses(3)
```

:::caution
Every block opened with `lamen`, `fungsi`, `unti`, `selama`, `untuk`, or `boat` must be closed with `jure_mo`. Missing `jure_mo` will cause a syntax error.
:::

## Lua Equivalent

```lua
-- Lua uses 'end' for all block closings
if true then
    print("A")
end
```
