const Router = require('express').Router();

const checkLoggedUserMiddleware = require('./../middlewares/checkLoggedUserMiddleware');

const CreateViewController = require('./../controllers/createViewController');
const ShowViewsController = require('./../controllers/ShowViewController');
const ShowWatchedVideosController = require('./../controllers/ShowWatchedVideosController');
const DeleteViewController = require('./../controllers/DeleteViewController');

Router.post('/views/create', checkLoggedUserMiddleware, CreateViewController.handle);
Router.post('/views', checkLoggedUserMiddleware, ShowViewsController.handle);
Router.get('/views/watched/:code', checkLoggedUserMiddleware, ShowWatchedVideosController.handle);
Router.delete('/views/delete', checkLoggedUserMiddleware, DeleteViewController.handle);

module.exports = Router;