const express = require('express');
const { home } = require('../controllers/homeController');

const router = express.Router();

router.get('/', home);
router.use('/user', require('./user'));

module.exports = router;