'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.Peeps = this.hasMany(models.Peeps, {onDelete: 'cascade'})
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {msg: 'Please enter a valid email'},
        notEmpty: {msg: 'Please enter an email'}
      }
    },
    password: DataTypes.STRING,
    allowNull: false
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};