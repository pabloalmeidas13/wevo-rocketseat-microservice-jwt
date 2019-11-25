var express = require("express");
const tokenController = require('../controllers/token.controller');

const router = express.Router();

router.post("/accounts/token/validate", tokenController.tokenValidate);

module.exports = router;