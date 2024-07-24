const express = require("express");
const router = express.Router();

const CUSTOMER_CONTROLLER = require("../../../../controllers/customer.controller");

router.use("/", CUSTOMER_CONTROLLER.getCustomer);

module.exports = router;
