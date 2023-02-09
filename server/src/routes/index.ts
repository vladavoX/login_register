import express from 'express'
const controllers = require('../controllers')
const router = express.Router()

router.route('/').get(controllers.getAllUsers)

module.exports = router
