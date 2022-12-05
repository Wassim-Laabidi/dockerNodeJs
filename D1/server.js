'use strict';

const express = require('express');

//constants
const PORT = 54321;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/', (rep, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);