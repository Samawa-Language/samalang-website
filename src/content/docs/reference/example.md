---
title: Lua Reference
description: Technical reference for the Lua engine powering SamaLang
---

SamaLang is powered by **Lua 5.4**, one of the fastest and most efficient scripting languages available. Since SamaLang transpiles directly to Lua, you have full access to the Lua standard library and ecosystem.

## Lua Compatibility

SamaLang is fully compatible with **Lua 5.4**. All Lua code can be mixed with SamaLang syntax. The transpiler performs keyword substitution, so any valid Lua code (using standard Lua keywords) will work if it doesn't conflict with SamaLang keywords.

## Standard Library

The following Lua standard library functions are available in SamaLang:

### Table Functions

| Function | Description |
|----------|-------------|
| `table.insert(t, [pos], value)` | Insert value at position |
| `table.remove(t, [pos])` | Remove value at position |
| `table.sort(t, [comp])` | Sort table elements |
| `table.concat(t, [sep])` | Concatenate table elements |

### String Functions

| Function | Description |
|----------|-------------|
| `string.len(s)` | Get string length |
| `string.upper(s)` | Convert to uppercase |
| `string.lower(s)` | Convert to lowercase |
| `string.sub(s, i, j)` | Extract substring |
| `string.find(s, pattern)` | Find pattern match |
| `string.format(fmt, ...)` | Format string |
| `string.gsub(s, pat, rep)` | Replace pattern |
| `string.rep(s, n)` | Repeat string |

### Math Functions

| Function | Description |
|----------|-------------|
| `math.abs(x)` | Absolute value |
| `math.ceil(x)` | Round up |
| `math.floor(x)` | Round down |
| `math.max(...)` | Maximum value |
| `math.min(...)` | Minimum value |
| `math.random([m, n])` | Random number |
| `math.sqrt(x)` | Square root |

### Type Checking

| Function | Description |
|----------|-------------|
| `type(v)` | Return type as string |
| `tostring(v)` | Convert to string |
| `tonumber(s)` | Convert to number |

## Learn More

- [Lua 5.4 Reference Manual](https://www.lua.org/manual/5.4/)
- [Programming in Lua (Book)](https://www.lua.org/pil/)
- [Lua Demo](https://www.lua.org/demo.html)
