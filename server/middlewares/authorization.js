const { Article } = require('../models')

function authorization(req,res,next){
  const id = req.params.id 
  Article.findByPk(id)
  .then(data=>{
    if(data){
      if(data.UserId == req.user.userId){
        next()
      }else{
        throw{
          status: 403,
          message: 'Unauthorized'
        }
      }
    }else{
      throw{
        status: 404,
        message: 'Article not found'
      }
    }
  })
  .catch(error=>{
    next(error)
  })
}

module.exports = authorization