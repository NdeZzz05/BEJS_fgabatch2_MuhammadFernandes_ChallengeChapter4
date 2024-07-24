const express = require("express");
const router = express.Router();

const CUSTOMER_CONTROLLER = require("../../../../controllers/customer.controller");

router.get("/", CUSTOMER_CONTROLLER.getCustomer);
router.get("/:id", CUSTOMER_CONTROLLER.getCustomerDetail);

module.exports = router;
