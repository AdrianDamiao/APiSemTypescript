const MainController = require('./controllers/MainController');

const MainRoutes = require('express').Router();

//POST -> CREATE
MainRoutes.post('/', MainController.main);
MainRoutes.post('/teste/:id', MainController.testId);

//GET -> READ
MainRoutes.get('/', MainController.main);
MainRoutes.get('/teste', MainController.test);

//PATCH -> UPDATE
MainRoutes.patch('/', MainController.main);

//DELETE -> DELETE
MainRoutes.delete('/', MainController.main);

module.exports = MainRoutes;