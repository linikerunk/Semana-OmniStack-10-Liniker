const { Router } = require('express')
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); // para cair em uma rota inicial

routes.get('/search', SearchController.index)

module.exports = routes;