var axios = require("axios");
var express = require('express');
var router = express.Router();

var endpoint = "http://localhost:25000";

/* GET edicoes page */
router.get("/", function(req, res, next) {
  axios.get(endpoint + "/edicoes").then(function(response) {
    // Sort editions by anoEdicao ascending
    const edicoesSorted = response.data.sort((a, b) => a.anoEdicao - b.anoEdicao);
    res.render("edicoesShow", { edicoes: edicoesSorted });
  }).catch(next);
});

/* GET edicao page */
router.get("/:id", function(req, res, next) {
  axios.get(endpoint + "/edicoes/" + req.params.id).then(function(response) {
    res.render("edicaoShow", { edicao: response.data });
  }).catch(next);
});

/* GET pais page */
router.get("/paises/:id", function(req, res, next) {
  axios.get(endpoint + "/participacoes/" + req.params.id).then(function(response) {
    axios.get(endpoint + "/organizacoes/" + req.params.id).then(function(orgResponse) {
      res.render("paisShow", { pais: req.params.id, participacoes: response.data, organizacoes: orgResponse.data});
    }).catch(next);
  }).catch(next);
});


module.exports = router;
