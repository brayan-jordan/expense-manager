const express = require('express');

const TypeExpenseController = require('./controllers/TypeExpenseController');

//consign

const routes = express.Router();

routes.post('/typeexpense/:user_id', TypeExpenseController.create);

module.exports = routes;