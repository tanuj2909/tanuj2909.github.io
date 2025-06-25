---
title: 'Connect'
description: 'A real time chat platform for communities.'
image:
    url: '/connect.png'
    alt: 'project image'
stack: NextJS, PostgreSQL, SocketIO, Prisma, Tailwind
github: https://github.com/tanuj2909/connect
---

## Features

- Real-time chat application with support for multiple servers, channels, and direct messages
- Built with Next.js for SSR and client-side interactivity
- WebSocket based messaging using Socket.IO for low-latency communication
- PostgreSQL database integration via Prisma ORM for relational data modeling
- Authentication, user roles, and channel access controls implemented
- Fully responsive UI styled with Tailwind CSS, mirroring a polished Discord-like UX

## Challenges / Unique Aspects

- Built a scalable event driven architecture to handle simultaneous socket connections
- Designed a normalized relational schema for servers, channels, messages, and users
- Managed synchronization of real time data across clients with state reconciliation logic
- Integrated auth and access layers without compromising WebSocket performance or security
- Achieved seamless transitions between static and dynamic content using Next.js routing

