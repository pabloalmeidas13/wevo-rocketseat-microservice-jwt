var express = require('express');
var app = express();

//Routes
const indexRoute = require('./routes/route');

//Porta que meu projeto irá rodar
app.listen(4000);

//Register Routes
app.use('/', indexRoute);

module.exports = app;



