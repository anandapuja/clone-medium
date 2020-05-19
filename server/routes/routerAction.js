const router = require('express').Router();
const controllerAction = require('../controllers/controllerAction');
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/articles', authentication,controllerAction.getArticles);
router.get('/articles/:id', authentication,controllerAction.getArticle);
router.post('/articles',authentication,controllerAction.addArticle);

router.get('/me/articles',authentication,controllerAction.getMyArticles);
router.put('/me/articles/:id',authentication,authorization,controllerAction.editArticle);
router.delete('/me/articles/:id', authentication,authorization,controllerAction.deleteArticle);

router.put('/articles/:id/bookmark',authentication,controllerAction.saveArticle);
router.delete('/articles/:id/unbookmark', authentication,controllerAction.unSaveArticle);
router.get('/articles/me/bookmarked', authentication,controllerAction.getBookmarked);

router.put('/articles/:id/clap', authentication,controllerAction.clapArticle);
router.get('/articles/me/clapped', authentication,controllerAction.getClapped)

router.get('/writer/:id', authentication,controllerAction.getWriter)

module.exports = router