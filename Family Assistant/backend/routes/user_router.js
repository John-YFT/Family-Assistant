const Router = require('express')
const router = new Router()
const user_controllers = require('../controllers/user_controllers')
const auth_middleware = require('../middleware/auth_middleware')

router.post('/registration', user_controllers.registration)
router.post('/login', user_controllers.login)
router.get('/auth', auth_middleware, user_controllers.check)
module.exports = router