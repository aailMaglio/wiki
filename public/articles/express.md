# Express

Express is a **minimalist web framework** for Node.js used to build APIs and web apps.

## Features

- Simple routing
- Middleware system
- RESTful API support

## Example

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000);