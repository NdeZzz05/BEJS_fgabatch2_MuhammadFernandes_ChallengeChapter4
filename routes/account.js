var express = require("express");
var router = express.Router();

const ACCOUNT_CONTROLLER = require("../controllers/account.controller");

/* GET Account listing. */
router.get("/", ACCOUNT_CONTROLLER.getAccount);

/* GET Detail Account listing. */
router.get("/:id", ACCOUNT_CONTROLLER.getDetailAccount);

/* POST Account listing. */
router.post("/", ACCOUNT_CONTROLLER.createAccount);

module.exports = router;
