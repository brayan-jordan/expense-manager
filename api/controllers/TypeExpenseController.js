const models = require('../models')

module.exports = {
    async create(req, res) {
        const { user_id } = req.params;
        var { name, limit } = req.body;

        if (!user_id) {
            user_id = 1
        }

        const typeexpense = await models.TypeExpense.create({
            user_id,
            name,
            limit,
        });

        return res.json(typeexpense);
    },

    async update(req, res) {
        const infosToEdit = req.body
        var { type_expense_id, user_id } = req.params

        if (!user_id) {
            user_id = 1
        }

        try {
            await models.TypeExpense.update(
                infosToEdit,
                {
                    where: {
                        id: type_expense_id,
                        user_id: user_id
                    }
                }
            )

            const typeExpense = await models.TypeExpense.findOne({
                where: {
                    id: type_expense_id,
                    user_id: user_id
                }
            })

            return res.status(200).json(typeExpense)
        } catch (err) {
            return res.status(500).json({ err: err.message })
        }
    },

    async findAllByUser(req, res) {
        const { user_id } = req.params;

        if (!user_id) {
            user_id = 1
        }

        const typeexpenses = await models.TypeExpense.findAll({
            where: {
                user_id: user_id
            }
        });

        return res.json(typeexpenses);
    },
}