require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const path = require('path');


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);
app.use('../uploads', express.static(path.join(__dirname, 'uploads')));


module.exports = app;