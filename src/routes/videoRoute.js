const Router = require('express').Router();

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const checkLoggedUserMiddleware = require('./../middlewares/checkLoggedUserMiddleware');

const CreateVideoController = require('./../controllers/CreateVideoController');
const IndexVideosController = require('./../controllers/IndexVideosController');
const ShowVideoController = require('./../controllers/ShowVideoController');
const UpdateVideoController = require('./../controllers/UpdateVideoController');
const DeleteVideoController = require('./../controllers/DeleteVideoController');

Router.post('/videos/create', checkLoggedUserMiddleware, upload.single('video'), CreateVideoController.handle);
Router.get('/videos/index/:id', IndexVideosController.handle);
Router.get('/videos/:id', checkLoggedUserMiddleware, ShowVideoController.handle);
Router.put('/videos/update/:id', checkLoggedUserMiddleware, UpdateVideoController.handle);
Router.delete('/videos/delete/:id', checkLoggedUserMiddleware, DeleteVideoController.handle);

module.exports = Router;