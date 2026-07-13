---
title: "jangka_mo (break)"
description: The jangka_mo keyword breaks out of a loop in Samalang v2.0
---

## jangka_mo (break)

`jangka_mo` breaks out of the nearest loop (`selama`, `untuk`, `ulang`).

> **Archived:** This is documentation for Samalang v2.0. [View latest docs](/)

### Example

```sl
untuk i = 1, 10, 1 boat
    lamen i == 5 tres
        jangka_mo
    jure_mo
    tulis(i)
jure_mo
```

### Lua Equivalent

```lua
for i = 1, 10, 1 do
    if i == 5 then
        break
    end
    print(i)
end
```
