var express = require('express');
var router = express.Router();

const USER_CONTROLLER = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', USER_CONTROLLER.index);

module.exports = router;
