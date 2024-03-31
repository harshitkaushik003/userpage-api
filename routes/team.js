const express = require('express');
const { create, add, get } = require('../controllers/teamController');


const router = express.Router();

router.post('/', create);
router.post('/:id/add/:userId', add);
router.get('/', get);

module.exports = router;