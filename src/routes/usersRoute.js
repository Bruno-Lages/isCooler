const Router = require('express').Router();

const checkLoggedUserMiddleware = require('./../middlewares/checkLoggedUserMiddleware');

const CreateUserController = require('./../controllers/createUserController');
const CreateTokenController = require('./../controllers/CreateTokenController');
const UpdateUserController = require('./../controllers/UpdateUserController');
const DeleteUserController = require('./../controllers/DeleteUserController');
const ShowUserController = require('./../controllers/ShowUserController');

Router.post('/users/create', CreateUserController.handle);
Router.post('/users/login', CreateTokenController.handle);
Router.get('/users/:id', ShowUserController.handle);
Router.put('/users/update/:id', checkLoggedUserMiddleware, UpdateUserController.handle);
Router.delete('/users/delete/:id', checkLoggedUserMiddleware, DeleteUserController.handle);

module.exports = Router;