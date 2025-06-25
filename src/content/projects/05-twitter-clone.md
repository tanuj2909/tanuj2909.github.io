---
title: 'Twitter Clone'
description: 'A twitter like web app using NextJS and GraphQL.'
image:
    url: '/blog.png'
    alt: 'project image'
stack: NextJS, GraphQL, PostgreSQL, Typescript, Tailwind
github: https://github.com/tanuj2909/url-shortener
---

## Features

- Twitter like app with posts, likes, comments and user profiles
- Built using Next.js with server-side rendering and static generation where appropriate
- GraphQL API for efficient querying and mutation of data with strict type enforcement via TypeScript
- PostgreSQL as the primary database with relations for users, tweets, and interactions
- AWS S3 integration for handling image uploads like profile pictures and media attachments
- Fully responsive UI styled with Tailwind CSS

## Challenges / Unique Aspects

- Designed and implemented a normalized GraphQL schema optimized for performance and scalability
- Integrated Apollo Client with TypeScript for robust, typed frontend/backend communication
- Managed cache invalidation and optimistic UI updates on post actions
- Balanced SSR, ISR, and CSR in Next.js to optimize performance and SEO
- Implemented secure, presigned S3 upload URLs for efficient client-side media handling

