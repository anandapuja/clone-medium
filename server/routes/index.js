const router = require('express').Router();
const routerAuth = require('./routerAuth')
const errorHandler = require('../middlewares/errrorHandler')

router.use(routerAuth)

router.use(errorHandler)

module.exports = router