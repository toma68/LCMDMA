const Router = require('express').Router;
const UserController = require('../controllers/user.controller');

const router = Router();

router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.delete('/:id', UserController.deleteUserById);
router.put('/:id', UserController.updateUser);
router.get('/', UserController.getAllUsers);

module.exports = router;