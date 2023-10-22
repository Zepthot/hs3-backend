// import
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/user');
const dbUser = process.env.DB_USER;
const dbPWD = process.env.DB_PWD;
// mongo connect
mongoose.connect('mongodb+srv://' + dbUser + ':' + dbPWD + '@cluster0.8527dpo.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Successful connection to MongoDB'))
    .catch(() => console.log('MongoDB connection failed'));

const app = express();

app.use(bodyParser.json());
// headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// routes
app.use('/', userRoutes);

module.exports = app;