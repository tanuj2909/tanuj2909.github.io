---
title: 'In-Memory Database'
description: 'An In-Memory Database written in Golang.'
image:
    url: '/in-memory-db.png'
    alt: 'project image'
stack: Golang
github: https://github.com/tanuj2909/in-memory-db
---

## Features

- Implements a basic in-memory key value store with Redis like commands (`SET`, `GET`, `DEL`, etc.)
- Handles concurrent client connections using sockets and a custom protocol parser
- Supports persistent state through an append only file (AOF) mechanism
- Includes command parsing, response formatting, and protocol validation
- Modular design allows for easy extension of command set and persistence strategies

## Challenges / Unique Aspects

- Recreated the Redis protocol (RESP) parser from scratch to handle raw TCP input efficiently
- Ensured safe concurrent access to the key-value store without race conditions
- Implemented a rudimentary event loop to manage multiple clients without threading overhead
- Gained deep understanding of Redis internals by mimicking real-world behaviors at a low level

