const models = require('../models')

module.exports = {
    async create(req, res) {
        const { user_id } = req.params;
        var { type_expense_id, name, date, value, details } = req.body;

        const user = await models.User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        if (!type_expense_id) {
            type_expense_id = 1
        }

        if (type_expense_id != 1) {
            const typeExpense = await models.TypeExpense.findByPk(type_expense_id);

            if (!typeExpense) {
                return res.status(400).json({ error: 'TypeExpense not found' });
            }
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

    async findRecentExpenses(req, res) {
        const { user_id } = req.params;

        const user = await models.User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const recentExpenses = await models.Expense.findAll({
            where: {
                user_id: user_id
            }
        });

        var separateExpenses = [];
        var dateToFilter = new Date();
        dateToFilter.setFullYear(dateToFilter.getFullYear() - 1)
        console.log(dateToFilter);

        for (let i = 0; i < 23; ++i) {
            dateToFilter.setMonth(dateToFilter.getMonth() + 1);
            separateExpenses.push({
                baseMonth: dateToFilter.getMonth() + 1,
                baseYear: dateToFilter.getFullYear(),
                expenses: recentExpenses.filter(index =>
                    index.date.getMonth() == dateToFilter.getMonth() &&
                    index.date.getFullYear() == dateToFilter.getFullYear()
                )
            })
        }

        return res.json(separateExpenses)
    }
}