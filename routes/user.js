const express = require('express');
const { create,addAllData, getUser, update, deleteUser} = require('../controllers/userController');
const router = express.Router();

router.post('/', create);
router.post('/addAll', addAllData);
router.get('/', getUser);
router.get('/:id', getUser);
router.put('/:id', update);
router.delete('/:id', deleteUser);

module.exports = router;