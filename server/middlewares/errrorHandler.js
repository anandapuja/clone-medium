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
        message: 'Email and user name cannot be emtpy'
      })
    }
  } else if (err.message) {
    console.log('masuik')
    res.status(err.status).json({
      message: err.message
    })
  }

}

module.exports = errorHandler