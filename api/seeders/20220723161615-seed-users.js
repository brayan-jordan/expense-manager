module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Brayan',
        email: 'brayan@brayan.com',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brendon',
        email: 'brendon@brendon.com',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}