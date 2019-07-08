var express = require('express');

var path = require('path');

var mongo = require('mongodb');

const hbs = require('hbs');

var bodyparser = require('body-parser');

const logger = require('./logger');

var app = express();

app.set('view engine', 'hbs');

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', require('./modole/datame/data.js'));

app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log(`app runing on port ${PORT}`));