const router = require('express').Router();
const routerAuth = require('./routerAuth')
const routerAction = require('./routerAction')
const errorHandler = require('../middlewares/errrorHandler')


router.use(routerAuth)
router.use(routerAction)

router.use(errorHandler)

module.exports = router