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