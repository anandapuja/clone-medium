const { User, Article, Bookmark, Clap, Message, Response } = require('../models');
const { Op } = require('sequelize')

class ControllerAction {
  static getArticles(req, res, next) {
    const attributes= ['user_name','email']
    Article.findAll({
      order:[['date', 'DESC']],
      include: {model: User, attributes:attributes
      }})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static getArticle(req, res, next) {
    const id = req.params.id;
    const attributes= ['user_name','email', 'avatar']
    Article.findByPk(id,{
      include:{model:User, attributes:attributes}
    })
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
      UserId: req.user.userId,
      clap: 0,

    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static getMyArticles(req, res, next) {
    User.findOne({
      where:{id:req.user.userId}, 
      attributes:['id','email','user_name','avatar','about_me'],
      include:{model:Article}
    })
    .then(data=>{
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
    Bookmark.findOne({
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
          return Bookmark.create({
            UserId: req.user.userId,
            ArticleId: id
          })
        }
      })
      .then(() => {
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
      include: { model: Article, include:{model:User, attributes:['user_name','email']} }
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
      },
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
      include: { model: Article,include:{model:User, attributes:['user_name','email']} }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static getWriter(req, res, next) {
    const id = Number(req.params.id);
    User.findByPk(id, {
      attributes: ['id','user_name','email', 'about_me', 'avatar'],
      include: { model: Article } 
    })
    // User.findOne({
    //   id:id,
    //   attributes: ['id','user_name','email'],
    //   include: { model: Article } 
    // })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => next(error))
  }

  static addMessage(req, res, next) {
    const writerId = req.params.writerid
    const inputData = req.body
    Message.create({
      title_message: inputData.title_message,
      body_message: inputData.body_message,
      date: Date.now(),
      UserId: writerId,
      SenderId: req.user.userId
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(error => next(error))
  }

  static getMessages(req, res, next) {
    const allMessage ={}
    Message.findAll({
      where: { UserId: req.user.userId },
      include: { model: User, attributes:['user_name','email', 'avatar'] }
    })
      .then(data => {
        allMessage.receive = data
        return Message.findAll({
          where: {SenderId: req.user.userId},
          include:{model: User, attributes:['user_name','email', 'avatar']}
        })
      })
      .then(theData=>{
        allMessage.send = theData
        res.status(200).json(allMessage)
      })
      .catch(error => next(error))
  }

  static getMessage(req, res, next) {
    const id = req.params.idmessage
    Message.findByPk(id,
      { include:[{model:Response, include:{model:User, attributes:['user_name','email']}}]})
      .then(data => {
        if (data) {
          if (data.UserId == req.user.userId) {
            res.status(200).json(data)
          } else {
            throw {
              status: 403,
              message: 'Unauthorized'
            }
          }
        } else {
          throw {
            status: 404,
            message: 'Message not found'
          }
        }
      })
      .catch(error => next(error))
  }

  static addResponse(req,res,next){
    const inputData = req.body
    const id = req.params.idmessage
    console.log('REQ BODY', inputData)
    Response.create({
      response: inputData.response,
      date: Date.now(),
      MessageId:id,
      UserId: req.user.userId
    })
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(error => next(error))
  }

  static getTopArticles(req,res,next){
    // console.log(`-------here`)
    Article.findAll({
      order:[['clap','DESC']],
      limit: 10,
      include: {model: User, attributes:['user_name','email']}
    })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(error=>{
      next(error)
    })
  }
}

module.exports = ControllerAction