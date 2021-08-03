const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('inside routers');


router.get('/', homeController.home );
console.log('i am here1');
router.use('/users', require('./users')); //router on '/users' we will go to users.js
router.use('/posts',require('./posts'));
router.use('/comments', require('./comments'));
router.use('/api',require('./api'));




module.exports = router;