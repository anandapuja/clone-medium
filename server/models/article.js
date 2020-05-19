'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Article extends Model {

  }
  Article.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    img_url: DataTypes.STRING,
    body: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    clap: DataTypes.INTEGER,
    date: DataTypes.DATE,
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  },{
    sequelize
  })

  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};