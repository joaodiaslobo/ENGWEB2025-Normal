var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var edicoesRouter = require('./routes/edicoes');

var app = express();

var mongoose = require("mongoose");

var mongoDB = "mongodb://localhost:27017/eurovisao";
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "[ERROR] Erro de conexão à base de dados."));
db.once("open", () => {
  console.log("[INFO] Conexão à base de dados realizada com sucesso.");
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', edicoesRouter);

console.log("[INFO] Servidor à escuta na porta 25000.");

module.exports = app;
