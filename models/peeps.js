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
    date() {
      const date = new Date(this.createdAt)
      return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
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