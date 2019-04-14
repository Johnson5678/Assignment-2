var express = require('express');
var router = express.Router();

var controller = require('../controller/controller.js');


// Display a random generated user.
router.get('/', controller.mainPage);
router.get('/users/all', controller.allUsers);
router.get('/users/:username', controller.getinfoByUsername);
router.post('/users', controller.createAdmin);
router.post('/users/login', controller.checkUser);

//Display news
router.post('/news', controller.createNews);
router.get('/news/all', controller.allNews);
router.get('/category/:category', controller.findOneNews);
router.get('/newest', controller.getNewestNews);



module.exports = router;