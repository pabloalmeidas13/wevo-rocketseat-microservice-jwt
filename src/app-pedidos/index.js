//Carregando os modulos 
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

//Routes
const indexRoute = require('./routes/route');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', indexRoute);

app.listen(5000);

module.exports = app;