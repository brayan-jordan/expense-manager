const express = require('express');

const TypeExpenseController = require('./controllers/TypeExpenseController');

//consign

const routes = express.Router();

routes.post('/typeexpense/:user_id', TypeExpenseController.create);
routes.get('/typeexpense/:user_id', TypeExpenseController.findAllByUser);

module.exports = routes;