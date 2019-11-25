var express = require("express");
const pedidoController = require('../controllers/pedido.controller');
const auth = require('../middlewares/auth.middleware');

const router = express.Router();

router.post("/salvarPedido", auth.tokenValidate, pedidoController.salvarPedido);

module.exports = router;