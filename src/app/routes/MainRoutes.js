const MainController = require('./controllers/MainController');

const MainRoutes = require('express').Router();

MainRoutes.get('/', MainController.main);
MainRoutes.get('/teste', MainController.test)

module.exports = MainRoutes;