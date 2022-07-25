const models = require('../models')

module.exports = {
    async create(req, res) {
        const { user_id } = req.params;
        var { name, limit } = req.body;

        const user = await models.User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
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

        const user = await models.User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const typeexpenses = await models.TypeExpense.findAll({
            where: {
                user_id: user_id
            }
        });

        return res.json(typeexpenses);
    },
}