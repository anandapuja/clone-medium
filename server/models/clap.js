'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Clap extends Model {

  }

  Clap.init({
    UserId: DataTypes.INTEGER,
    ArticleId: DataTypes.INTEGER
  },{sequelize})

  Clap.associate = function(models) {
    // associations can be defined here
  };
  return Clap;
};