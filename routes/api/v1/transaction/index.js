var express = require("express");
var router = express.Router();

const TRANSACTION_CONTROLLER = require("../../../../controllers/transaction.controller");

/* GET users listing. */
router.get("/", TRANSACTION_CONTROLLER.getTransaction);
router.get("/:id", TRANSACTION_CONTROLLER.getDetailTransaction);

module.exports = router;
