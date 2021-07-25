const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('inside routers');


router.get('/', homeController.home );
console.log('i am here1');
router.use('/users', require('./users'));
console.log('i am here2');

// router.get('/profile', homeController.profile);




module.exports = router;