var express = require('express');
var router = express.Router();

var controllers = require('../controllers');

/* GET homepage. */
router.get('/', controllers.homeController.index);

/* My Routs */


module.exports = router;
