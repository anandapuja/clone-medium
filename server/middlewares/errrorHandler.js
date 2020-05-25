function errorHandler(err, req, res, next) {
  console.log(err)
  if (err.name == 'SequelizeConnectionError' || err.name== 'SequelizeDatabaseError') {
    res.status(500).json({
      message: 'Internal server error'
    })
  }
  if (err.name) {
    if(err.errors[0].message == 'Validation notEmpty on email failed' || err.errors[0].message == 'Validation notEmpty on user_name failed'){
      res.status(400).json({
        message: 'Email and username cannot be emtpy'
      })
    }else if(err.errors[0].message =='Validation notEmpty on title failed' || err.errors[0].message =='Validation notEmpty on body failed'){
      res.status(400).json({
        message: 'Title and body cannot be emtpy'
      })
    }else if(err.errors[0].message =='Validation notEmpty on title_message failed' || err.errors[0].message =='Validation notEmpty on body_message failed'){
      res.status(400).json({
        message: 'Title and body cannot be emtpy'
      })
    }else if(err.errors[0].message === 'email must be unique'){
      res.status(400).json({
        message: 'Email already exist!'
      })
    }
  } else if (err.message) {
    res.status(err.status).json({
      message: err.message
    })
  }

}

module.exports = errorHandler