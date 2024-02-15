const express = require('express')
const userController = require('../Controller/userController')

const router = new express.Router()


router.post('/register',userController.regsiter)

router.get('/gettingAllData',userController.tableView)

module.exports = router