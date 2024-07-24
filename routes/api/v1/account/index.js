var express = require("express");
var router = express.Router();

const ACCOUNT_CONTROLLER = require("../../../../controllers/account.controller");

/* GET account listing. */

router.get("/", ACCOUNT_CONTROLLER.getAccount);
router.get("/:id", ACCOUNT_CONTROLLER.getDetailAccount);

module.exports = router;
