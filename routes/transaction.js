var express = require("express");
var router = express.Router();

const TRANSACTION_CONTROLLER = require("../controllers/transaction.controller");

/* GET transaction listing. */
router.get("/", TRANSACTION_CONTROLLER.getTransaction);

/* GET detail transaction listing. */
router.get("/:id", TRANSACTION_CONTROLLER.getDetailTransaction);

module.exports = router;
