var express = require("express");
var router = express.Router();

const CUSTOMER_CONTROLLER = require("../controllers/customer.controller");

/* GET customer listing. */
router.get("/", CUSTOMER_CONTROLLER.getCustomer);

/* GET customer detail by ID. */
router.get("/:id", CUSTOMER_CONTROLLER.getCustomerDetail);

module.exports = router;
