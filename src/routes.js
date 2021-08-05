const Router = require('express').Router();

const checkLoggedUserMiddleware = require('./middlewares/checkLoggedUserMiddleware');

const CreateUserController = require('./controllers/createUserController');
const CreateTokenController = require('./controllers/CreateTokenController');
const UpdateUserController = require('./controllers/UpdateUserController');
const DeleteUserController = require('./controllers/DeleteUserController');
const ShowUserController = require('./controllers/ShowUserController');

const CreateRoomController = require('./controllers/CreateRoomController');
const ShowRoomController = require('./controllers/ShowRoomController');
const UpdateRoomController = require('./controllers/UpdateRoomController');
const DeleteRoomController = require('./controllers/DeleteRoomController');

const CreateModuleController = require('./controllers/CreateModuleController');
const ShowRoomModulesController = require('./controllers/ShowRoomModulesController');
const UpdateModuleController = require('./controllers/UpdateModuleController');
const DeleteModuleController = require('./controllers/DeleteModuleController');

Router.post('/users/create', CreateUserController.handle);
Router.post('/users/login', CreateTokenController.handle);
Router.get('/users/:id', ShowUserController.handle);
Router.put('/users/update/:id', checkLoggedUserMiddleware, UpdateUserController.handle);
Router.delete('/users/delete/:id', checkLoggedUserMiddleware, DeleteUserController.handle);

Router.post('/rooms/create', checkLoggedUserMiddleware, CreateRoomController.handle);
Router.get('/rooms/:id', ShowRoomController.handle);
Router.put('/rooms/update/:id', checkLoggedUserMiddleware, UpdateRoomController.handle);
Router.delete('/rooms/delete/:id', checkLoggedUserMiddleware, DeleteRoomController.handle);

Router.post('/modules/create', checkLoggedUserMiddleware, CreateModuleController.handle);
Router.get('/modules/:id', ShowRoomModulesController.handle);
Router.put('/modules/update/:id', checkLoggedUserMiddleware, UpdateModuleController.handle);
Router.delete('/modules/delete/:id', checkLoggedUserMiddleware, DeleteModuleController.handle);

module.exports = Router;