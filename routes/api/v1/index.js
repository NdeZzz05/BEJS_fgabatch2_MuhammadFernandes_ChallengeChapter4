const express = require("express");
const router = express.Router();
const TRANSACTION_ROUTER = require("./transaction");
const ACCOUNT_ROUTER = require("./account");
const CUSTOMER_ROUTER = require("./customer");

router.use("/transactions", TRANSACTION_ROUTER);
router.use("/accounts", ACCOUNT_ROUTER);
router.use("/customers", CUSTOMER_ROUTER);

module.exports = router;
