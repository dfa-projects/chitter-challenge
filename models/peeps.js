'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peeps extends Model {
    static associate(models) {
      this.Users = this.belongsTo(models.User);
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