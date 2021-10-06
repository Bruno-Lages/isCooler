const Router = require('express').Router();

const checkLoggedUserMiddleware = require('./../middlewares/checkLoggedUserMiddleware');

const CreateRoomController = require('./../controllers/CreateRoomController');
const IndexRoomsController = require('./../controllers/IndexRoomsControllers');
const ShowRoomController = require('./../controllers/ShowRoomController');
const SearchRoomController = require('./../controllers/SearchRoomController');
const UpdateRoomController = require('./../controllers/UpdateRoomController');
const DeleteRoomController = require('./../controllers/DeleteRoomController');

Router.post('/rooms/create', checkLoggedUserMiddleware, CreateRoomController.handle);
Router.get('/rooms', IndexRoomsController.handle);
Router.get('/rooms/:id', ShowRoomController.handle);
Router.post('/rooms/search', SearchRoomController.handle);
Router.put('/rooms/update/:id', checkLoggedUserMiddleware, UpdateRoomController.handle);
Router.delete('/rooms/delete/:id', checkLoggedUserMiddleware, DeleteRoomController.handle);

module.exports = Router;