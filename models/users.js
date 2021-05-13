'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Peeps = this.hasMany(models.Peeps, {onDelete: 'cascade'})
    }
  };
  Users.init({
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: {msg: 'Please enter a valid email'},
        notEmpty: {msg: 'Please enter an email'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a password'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
  };