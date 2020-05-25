const router = require('express').Router();
const controllerAuth = require('../controllers/contollerAuth')

router.post('/register', controllerAuth.register);
router.post('/login',controllerAuth.login)

module.exports = router