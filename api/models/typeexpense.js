'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeExpense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
      this.hasMany(models.Expense, {
        foreignKey: 'type_expense_id',
        as: 'expenses'
      });
    }
  }
  TypeExpense.init({
    name: DataTypes.STRING,
    limit: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'TypeExpense',
    tableName: 'typeexpenses'
  });
  return TypeExpense;
};