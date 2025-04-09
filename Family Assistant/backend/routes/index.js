const Router = require('express')
const router = new Router()


const user_router = require('./user_router')
const feedback_router = require('./about_us');
const downCount_router = require('./downloadcount_router');
const rating_router = require('./rating_router');


router.use('/user', user_router)
router.use('/feedback', feedback_router)
router.use('/dowloadCount', downCount_router)
router.use('/ratings', rating_router)



module.exports = router