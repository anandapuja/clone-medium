const {User} = require('../models');
const jwt = require('jsonwebtoken');
const {checkPassword} = require('../helpers/bcrypt')
require('dotenv').config();

class ControllerAuth{
  static register(req,res,next){
    const inputData = req.body;
    User.create(inputData)
    .then(data=>{
      const token = jwt.sign({
        userId: data.id,
        userEmail: data.email
      }, process.env.TOKEN_KEY)
      res.status(201).json({access_token:token})
    })
    .catch(error=> next(error))
  }


  static login(req,res,next){
    const inputData = req.body
    User.findOne({where:{email:inputData.email}})
    .then(data=>{
      if(data){
        if(checkPassword(inputData.password,data.password)){
          const token = jwt.sign({
            userId: data.id,
            userEmail: data.email
          }, process.env.TOKEN_KEY)
          res.status(200).json({access_token:token})
        }else{
          throw {
            message: 'Wrong password'
          }
        }
      }else{
        throw {
          message: 'Email not found'
        }
      }
    })
    .catch(error=>next(error))
  }
}

module.exports = ControllerAuth