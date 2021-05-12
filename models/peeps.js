'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peeps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Users = this.belongsTo(models.Users)
    }
  };
  Peeps.init({
    peep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Peeps',
  });
  return Peeps;
};