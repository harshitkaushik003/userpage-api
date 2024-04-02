const express = require('express');
const { create, add, get, getTeam } = require('../controllers/teamController');


const router = express.Router();

router.post('/', create);
router.post('/:id/add/:userId', add);
router.get('/:id', getTeam);
router.get('/', get);

module.exports = router;