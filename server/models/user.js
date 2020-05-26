'use strict';
const {hashPassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class User extends Model {

  }

  User.init({
    email: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    user_name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    avatar: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    about_me: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    }
  },{
    sequelize,
    hooks:{
      beforeCreate: (user,options)=>{
        user.password = hashPassword(user.password)
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Bookmark)
    User.hasMany(models.Clap)
    User.hasMany(models.Article)
    User.hasMany(models.Response)
  };
  return User;
};