const UsersController = require('./controllers/UsersController');

const UserRoutes = require('express').Router();

UserRoutes.get('/user', UsersController.main);

module.exports = UserRoutes;