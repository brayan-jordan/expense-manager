const express = require('express');

const TypeExpenseController = require('./controllers/TypeExpenseController');
const ExpenseController = require('./controllers/ExpenseController');

//consign

const routes = express.Router();

routes.post('/typeexpense/:user_id', TypeExpenseController.create);
routes.get('/typeexpense/:user_id', TypeExpenseController.findAllByUser);

routes.post('/expense/:user_id', ExpenseController.create);
routes.get('/expense/:user_id', ExpenseController.findRecentExpenses);

module.exports = routes;