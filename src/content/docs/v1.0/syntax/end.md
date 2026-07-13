---
title: jure_mo (end)
description: End a code block in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `jure_mo` keyword ends a block of code in SamaLang v1.0. It is used to close `lamen`, `selama`, `untuk`, `fungsi`, and other block structures.
It is equivalent to `end` in standard Lua.

## Syntax

```sl
# End an if block
lamen condition tres
    # code
jure_mo

# End a function
fungsi nama()
    # code
jure_mo
```

## Examples

### Closing Different Blocks

```sl
# If block
lamen true tres
    tulis("A")
jure_mo

# Function block
fungsi hello()
    tulis("Hello!")
jure_mo

# While block
ada i = 1
selama i <= 5 boat
    tulis(i)
    i = i + 1
jure_mo
```

### Nested Blocks

```sl
fungsi proses(x)
    lamen x > 0 tres
        untuk i = 1, x boat
            tulis("Iterasi " .. tostring(i))
        jure_mo
    jure_mo
    semalik x * 2
jure_mo

tulis(proses(3))
```

:::caution
Every block opened with `lamen`, `fungsi`, `selama`, or `untuk` must be closed with `jure_mo`. Missing `jure_mo` will cause a syntax error.
:::

## Lua Equivalent

```lua
if true then
    print("A")
end

function hello()
    print("Hello!")
end
```
