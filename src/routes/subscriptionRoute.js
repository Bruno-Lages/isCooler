const Router = require('express').Router();

const checkLoggedUserMiddleware = require('./../middlewares/checkLoggedUserMiddleware');

const CreateSubscriptionController = require('./../controllers/CreateSubscriptionController');
const IndexSubscriptionsController = require('./../controllers/IndexSubscriptionsController');
const ShowSubscriptionsController = require('./../controllers/ShowSubscriptionsController');
const DeleteSubscriptionController = require('./../controllers/DeleteSubscriptionController');

Router.post('/subscriptions/create', checkLoggedUserMiddleware, CreateSubscriptionController.handle);
Router.get('/subscriptions/show/:id', ShowSubscriptionsController.handle);
Router.get('/subscriptions/index', checkLoggedUserMiddleware, IndexSubscriptionsController.handle);
Router.delete('/subscriptions/delete', checkLoggedUserMiddleware, DeleteSubscriptionController.handle);

module.exports = Router;