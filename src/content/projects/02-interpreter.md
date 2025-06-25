---
title: 'Interpreter'
description: 'An Interpreter frontend written in Java.'
image:
    url: '/interpreter.png'
    alt: 'project image'
stack: Java
github: https://github.com/tanuj2909/interpreter
---
## Features

- Implements the complete frontend of a language interpreter as outlined in *Crafting Interpreters*
- Includes a recursive descent parser for expression and statement parsing
- Scans tokens with proper classification (identifiers, keywords, operators, literals)
- Detailed syntax error reporting with line and token context
- Supports core language features like variable declarations, conditionals, and loops (in AST form)
- Cleanly structured using object-oriented design principles in Java

## Challenges / Unique Aspects

- Built a modular lexer and parser pipeline from scratch, improving understanding of compiler frontend internals
- Managed left recursion and operator precedence without external libraries
- Followed a book driven development path but made architectural improvements for extensibility
- Designed AST classes using the Visitor pattern to allow easy backend expansion in the future

