const models = require('../models')

module.exports = {
    async create(req, res) {
        const { user_id } = req.params;
        var { type_expense_id, name, date, value, details } = req.body;

        const user = await models.User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Fazer validacao de type expense

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
}