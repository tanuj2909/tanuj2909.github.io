---
title: 'Toy SQLite'
description: 'A SQLite like database written in C.'
image:
    url: '/sqlite.png'
    alt: 'project image'
stack: C
github: https://github.com/tanuj2909/sqlite
---

## Features

- Implements a simple, persistent SQL database from scratch in C
- Supports basic SQL-like commands: `INSERT`, `SELECT`, with row storage and paging
- Uses a custom binary format for data storage, backed by a B-Tree structure for indexing
- Handles input parsing, row serialization, and disk I/O manually without external libraries
- Mimics low-level internals of SQLite such as page cache, fixed-size records, and virtual tables

## Challenges / Unique Aspects

- Wrote a pager system to manage reading/writing fixed-size pages to disk efficiently
- Built a command-line REPL with proper input buffering and token parsing
- Developed an understanding of how real databases handle memory, indexing, and file systems
- Followed a byte-level approach to data layout, enhancing understanding of data alignment and performance

