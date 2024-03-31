const express = require('express');
const { create, getUser} = require('../controllers/userController');
const router = express.Router();

router.post('/', create);
router.get('/', getUser);
router.get('/:id', getUser);

module.exports = router;