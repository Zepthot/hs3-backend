const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'request received'});
});

module.exports = app;