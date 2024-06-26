const express = require('express');
const { home } = require('../controllers/homeController');

const router = express.Router();

router.get('/', home);
router.use('/user', require('./user'));
router.use('/team', require('./team'));

module.exports = router;