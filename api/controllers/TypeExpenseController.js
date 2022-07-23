const TypeExpense = require('../models/typeexpense');
const User = require('../models/user');

module.exports = {
    async create(req, res) {
        const { user_id } = req.params;
        const { name, limit } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const typeexpense = await TypeExpense.create({
            user_id,
            name,
            limit,
        });

        return res.json(typeexpense);
    },
}