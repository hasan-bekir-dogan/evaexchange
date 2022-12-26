const express = require('express')
const accountController = require('../controllers/accountController')

const router = express.Router();

router.route('/').get((req, res) => {
    accountController.getAccounts().then(data => res.json(data))
})

router.route('/bought').get((req, res) => {
    accountController.getBoughtAccounts().then(data => res.json(data))
})

router.route('/sold').get((req, res) => {
    accountController.getSoldAccounts().then(data => res.json(data))
})

router.route('/user/:id').get((req, res) => {
    accountController.getUserAccounts(req.params.id).then(data => res.json(data))
})

module.exports = router;