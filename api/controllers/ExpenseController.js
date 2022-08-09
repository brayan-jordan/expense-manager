const models = require('../models')

module.exports = {
    async create(req, res) {
        var { user_id } = req.params;
        var { type_expense_id, name, date, value, details } = req.body;

        if (!user_id) {
            user_id = 1
        }

        if (!type_expense_id) {
            type_expense_id = 1
        }

        const expense = await models.Expense.create({
            user_id,
            type_expense_id,
            name,
            date,
            value,
            details
        });

        return res.json(expense);
    },

    async findExpensesByYear(req, res) {
        var { user_id } = req.params;

        if (!user_id) {
            user_id = 1
        }

        var recentExpenses = await models.Expense.findAll({
            where: {
                user_id: user_id
            }
        });

        var { yearToFilter } = req.body

        if (!yearToFilter) {
            yearToFilter = new Date().getFullYear()
        }

        recentExpenses = recentExpenses.filter(index => index.date.getFullYear() == yearToFilter)

        var separateExpenses = [];

        for (let i = 0; i < 12; ++i) {
            separateExpenses.push({
                baseMonth: i + 1,
                expenses: recentExpenses.filter(index =>
                    index.date.getMonth() == i
                )
            })
        }

        return res.json(separateExpenses)
    }
}