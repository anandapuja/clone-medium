const { Article, Bookmark, Clap } = require('../models');
const { Op } = require('sequelize')

class ControllerAction {
  static getArticles(req, res, next) {
    Article.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static getArticle(req, res, next) {
    const id = req.params.id
    Article.findByPk(id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static addArticle(req, res, next) {
    const inputData = req.body
    Article.create({
      title: inputData.title,
      img_url: inputData.img_url,
      body: inputData.body,
      category: inputData.category,
      date: Date.now(),
      UserId: inputData.UserId,
      clap: 0,

    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static getMyArticles(req, res, next) {
    Article.findAll({ where: { UserId: req.user.userId } })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static editArticle(req, res, next) {
    const id = req.params.id
    const inputData = req.body
    Article.findByPk(id)
      .then(data => {
        if (data) {
          return Article.update({
            title: inputData.title,
            img_url: inputData.img_url,
            body: inputData.body,
            category: inputData.category,
            date: Date.now(),
          }, { where: { id: id } })
        } else {
          throw {
            status: 404,
            message: 'Article not found'
          }
        }
      })
      .then(data => {
        res.status(200).json({
          message: 'Article has been updated'
        })
      })
      .catch(error => next(error))
  }

  static deleteArticle(req, res, next) {
    const id = req.params.id
    Article.destroy({ where: { id: id } })
      .then(data => {
        res.status(200).json({
          message: 'Article has been deleted'
        })
      })
      .catch(error => next(error))
  }

  static saveArticle(req, res, next) {
    const id = req.params.id
    Article.findByPk(id)
      .then(data => {
        if (data) {
          console.log(data)
          Bookmark.create({
            UserId: req.user.userId,
            ArticleId: data.id
          })
        } else {
          throw {
            status: 404,
            message: 'Article not found'
          }
        }
      })
      .then(data => {
        res.status(200).json({
          message: 'Article has been bookmarked'
        })
      })
      .catch(error => next(error))
  }

  static unSaveArticle(req, res, next) {
    const id = req.params.id
    Bookmark.destroy({
      where: {
        [Op.and]: [
          { UserId: req.user.userId },
          { ArticleId: id }
        ]
      }
    })
      .then(data => {
        res.status(200).json({
          message: 'Article has been unbookmarked'
        })
      })
      .catch(error => next(error))
  }

  static getBookmarked(req, res, next) {
    Bookmark.findAll({
      where: { UserId: req.user.userId },
      include: { model: Article }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static clapArticle(req, res, next) {
    const id = req.params.id
    Clap.findOne({
      where: {
        [Op.and]: [
          { UserId: req.user.userId },
          { ArticleId: id }
        ]
      }
    })
      .then(data => {
        if (data) {
          return data
        } else {
          return Clap.create({
            UserId: req.user.userId,
            ArticleId: id
          })
        }
      })
      .then(() => {
        return Article.findByPk(id)
      })
      .then(theData => {
        theData.clap++
        return Article.update({
          clap: theData.clap
        }, { where: { id: id } })
      })
      .then(() => {
        res.status(200).json({
          message: 'You have clapped the article'
        })
      })
      .catch(error => next(error))
  }

  static getClapped(req, res, next) {
    Clap.findAll({
      where: { UserId: req.user.userId },
      include: { model: Article }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }
}

module.exports = ControllerAction