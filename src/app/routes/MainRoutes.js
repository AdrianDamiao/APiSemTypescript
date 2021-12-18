const MainController = require('./controllers/MainController');

const MainRoutes = require('express').Router();

MainRoutes.get('/', MainController.main);

module.exports = MainRoutes;