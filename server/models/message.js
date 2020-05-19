'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Message extends Model{

  }

  Message.init({
    title_message: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    body_message: {
      type: DataTypes.TEXT,
      validate:{
        notEmpty: true
      }
    },
    date: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    SenderId: DataTypes.INTEGER
  }, {sequelize})

  Message.associate = function(models) {
    // associations can be defined here
    Message.hasMany(models.Response)
    Message.belongsTo(models.User,{foreignKey:'UserId'})
  };
  return Message;
};