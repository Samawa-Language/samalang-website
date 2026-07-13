---
title: Getting Started
description: Start programming with SamaLang v2.0 — your first steps with 21 Samawa keywords
---

:::caution[Archived Documentation]
This is archived documentation for **SamaLang v2.0**. For the latest version, visit the [current documentation](/).
:::

Welcome to **SamaLang v2.0** — where modern coding meets Samawa culture.

SamaLang is a programming language built on top of **Lua**, using keywords from the **Samawa language**. It offers a powerful, lightweight environment with a meaningful cultural identity.

## Why SamaLang?

* **Approachable Logic:** Simplifies complex programming concepts for beginners.
* **Cultural Identity:** Integrates Samawa vocabulary and values into the learning experience.
* **Lua Powered:** Benefit from the speed and efficiency of a world-class scripting engine.
* **Full Lua Compatibility:** Access the entire Lua standard library and ecosystem.

## Quick Example

```sl
# Traditional greeting
tulis("Salam Sarea!")

# Local variables
ada nama = "SamaLang"
ada versi = 2.0
tulis(nama .. " v" .. tostring(versi))

# Function
fungsi tambah(a, b)
    semalik a + b
jure_mo

tulis(tambah(3, 5)) # Output: 8
```

## v2.0 Keywords

SamaLang v2.0 includes **21 keywords**:

| Keyword | Lua Equivalent | Purpose |
|---------|---------------|---------|
| `ada` | `local` | Declare variable |
| `fungsi` | `function` | Define function |
| `lamen` | `if` | Conditional |
| `tres` | `then` | Start block |
| `lamen_no` | `else` | Alternative branch |
| `lamen_no_kebali` | `elseif` | Additional conditional branch |
| `jure_mo` | `end` | End block |
| `selama` | `while` | While loop |
| `unti` | `while` | While loop (alternate) |
| `boat` | `do` | Start loop body |
| `untuk` | `for` | Numeric for loop |
| `sampe` | `until` | Repeat-until loop |
| `jangka_mo` | `break` | Exit loop |
| `tulis` | `print` | Print output |
| `nda_isi` | `nil` | Null value |
| `no` | `not` | Logical NOT |
| `dan` | `and` | Logical AND |
| `atau` | `or` | Logical OR |
| `tutu` | `true` | Boolean true |
| `siong` | `false` | Boolean false |
| `semalik` | `return` | Return value |

## Comments

Use `#` for single-line comments in SamaLang v2.0:

```sl
# This is a comment
tulis("Hello!") # Inline comment
```

## Writing Your First Program

1. Install SamaLang via npm: `npm install -g samalang`
2. Create a file with the `.sl` extension
3. Write your code using SamaLang keywords
4. Run it with: `samalang yourfile.sl`

```sl
# my_first_program.sl
ada nama = "Dunia"
tulis("Halo, " .. nama .. "!")
```

## The Journey

### Basics and Heritage
Understand the fundamental syntax of SamaLang and how it incorporates traditional Samawa concepts into code structure.

### Logic and Decision Making
Learn how the language handles logic through conditionals and loops, reflecting the way we solve problems in everyday Samawa life.

### The Technical Bridge
Discover how SamaLang interfaces with the Lua runtime, allowing you to use professional-grade tools while maintaining a familiar cultural syntax.

---

## Ready to Explore?

<CardGrid>
  <LinkCard
    title="Data Types"
    description="Learn about numbers, strings, booleans, nil, and tables."
    href="/v2.0/concepts/data-types"
  />
  <LinkCard
    title="Syntax Reference"
    description="All 21 Samawa keywords with examples."
    href="/v2.0/syntax/ada"
  />
  <LinkCard
    title="Current Docs"
    description="Visit the latest SamaLang documentation."
    href="/"
  />
</CardGrid>
