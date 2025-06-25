---
title: 'URL Shortener'
description: 'A superfast url shortener written in Golang.'
image:
    url: '/url-shortener.png'
    alt: 'project image'
stack: Golang
github: https://github.com/tanuj2909/url-shortener
---

## Features

- Simple and fast URL shortening service built with Go
- Uses Redis for in-memory key value storage of shortened URL mappings
- Exposes RESTful APIs for shortening and resolving URLs
- Generates unique short codes and handles redirection efficiently
- Fully containerized using Docker for easy deployment

## Challenges / Unique Aspects

- Designed a collision-free short code generator with base encoding
- Managed Redis connections and TTL (Time To Live) settings for expiring links
- Built the entire application as a stateless, lightweight microservice
- Used Docker to containerize the app, making it easily deployable in any environment

