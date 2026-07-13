---
title: selama (while)
description: While loop in SamaLang v1.0
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v1.0**. For the latest version, visit the [current documentation](/).
:::

## Description

The `selama` keyword starts a while loop in SamaLang v1.0.
It is equivalent to `while` in standard Lua.

## Syntax

```sl
selama condition boat
    # code
jure_mo
```

## Examples

### Countdown

```sl
ada hitung = 5

selama hitung > 0 boat
    tulis(hitung)
    hitung = hitung - 1
jure_mo

tulis("Lepas landas!")
# Output: 5, 4, 3, 2, 1, Lepas landas!
```

### Sum Until Limit

```sl
ada total = 0
ada i = 1

selama total < 100 boat
    total = total + i
    i = i + 1
jure_mo

tulis("Total: " .. tostring(total))
tulis("Iterasi: " .. tostring(i - 1))
```

### Infinite Loop with Condition

```sl
ada count = 0

selama true boat
    count = count + 1
    lamen count >= 5 tres
        jure_mo
    jure_mo
jure_mo

tulis(count) # Output: 5
```

## Lua Equivalent

```lua
local hitung = 5

while hitung > 0 do
    print(hitung)
    hitung = hitung - 1
end

print("Lepas landas!")
```
