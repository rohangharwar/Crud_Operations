const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/', (req, res) => userController.createUser(req, res));
router.get('/', (req, res) => userController.getAllUsers(req, res));
router.get('/:id', (req, res) => userController.getUserById(req, res));
router.put('/:id', (req, res) => userController.updateUserById(req, res));
router.delete('/:id', (req, res) => userController.deleteUserById(req, res));

module.exports = router;