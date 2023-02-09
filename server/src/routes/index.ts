import express from 'express'
const controllers = require('../controllers')
const router = express.Router()

router.route('/').get(controllers.getAllUsers)
router.route('/login').post(controllers.loginUser)
router.route('/register').post(controllers.registerUser)

module.exports = router
