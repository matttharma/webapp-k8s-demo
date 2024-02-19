'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hi', (req, res) => {
  res.send('Hello there!');
});

app.get('/hello', (req, res) => {
    res.send('Hi there!');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);