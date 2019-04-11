'use strict';

const express = require('express');
const app = express();
const { PORT: port } = process.env;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});

