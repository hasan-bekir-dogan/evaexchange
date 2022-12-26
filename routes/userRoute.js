const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router();

router.route('/').get((req, res) => {
    userController.getUsers().then(data => res.json(data))
})

module.exports = router;