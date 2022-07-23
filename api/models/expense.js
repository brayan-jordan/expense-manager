'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
      this.belongsTo(models.TypeExpense, { foreignKey: 'type_expense_id', as: 'typeexpense' })
    }
  }
  Expense.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.FLOAT,
    details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Expense',
    tableName: 'expenses'
  });
  return Expense;
};