'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Response extends Model{

  }

  Response.init({
    response: {
      type:DataTypes.TEXT,
      validate:{
        notEmpty: true
      }
    },
    date: DataTypes.DATE,
    MessageId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  },{sequelize});

  Response.associate = function(models) {
    // associations can be defined here
    Response.belongsTo(models.Message)
    Response.belongsTo(models.User)
  };
  return Response;
};