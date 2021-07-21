const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('inside routers');


router.get('/', homeController.home );
router.get('/profile', homeController.profile);




module.exports = router;