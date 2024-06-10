var express = require('express');
var router = express.Router();
var controller = require('/Users/thanhnguyen/Desktop/travlr/app_api/controllers/travel.js');

/* GET home page. */
router.get('/', controller.travel);

module.exports = router;
