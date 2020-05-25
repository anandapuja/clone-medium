'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Bookmark extends Model {

  }

  Bookmark.init({
    UserId: DataTypes.INTEGER,
    ArticleId: DataTypes.INTEGER
  },{sequelize})

  Bookmark.associate = function(models) {
    // associations can be defined here
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Article,{foreignKey: 'ArticleId'})
  };
  return Bookmark;
};