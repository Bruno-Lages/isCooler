const Router = require('express').Router();

const checkLoggedUserMiddleware = require('./../middlewares/checkLoggedUserMiddleware');

const CreateModuleController = require('./../controllers/CreateModuleController');
const ShowRoomModulesController = require('./../controllers/ShowRoomModulesController');
const UpdateModuleController = require('./../controllers/UpdateModuleController');
const DeleteModuleController = require('./../controllers/DeleteModuleController');

Router.post('/modules/create', checkLoggedUserMiddleware, CreateModuleController.handle);
Router.get('/modules/:id', ShowRoomModulesController.handle);
Router.put('/modules/update/:id', checkLoggedUserMiddleware, UpdateModuleController.handle);
Router.delete('/modules/delete/:id', checkLoggedUserMiddleware, DeleteModuleController.handle);

module.exports = Router;