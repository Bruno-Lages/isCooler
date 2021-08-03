const Router = require('express').Router();

const CreateUserController = require('./controllers/createUserController');
const CreateTokenController = require('./controllers/CreateTokenController');

Router.post('/users/create', CreateUserController.handle);
Router.post('/users/login', CreateTokenController.handle);

module.exports = Router;