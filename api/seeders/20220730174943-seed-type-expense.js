module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('typeexpenses', [
      {
        user_id: 1,
        name: 'Default TypeExpense',
        limit: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('typeexpenses', null, {})
  }
}