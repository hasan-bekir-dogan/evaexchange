const express = require('express')
const tradeController = require('../controllers/tradeController')

const router = express.Router();

router.route('/').get((req, res) => {
    tradeController.getTrades().then(data => res.json(data))
})

router.route('/create').post((req, res) => {
    tradeController.createTrade(req.body).then(data => res.json(data))
})

router.route('/update').put((req, res) => {
    tradeController.updateTrade(req.body).then(data => res.json(data))
})

router.route('/delete/:id').delete((req, res) => {
    tradeController.deleteTrade(req.params.id).then(data => res.json(data))
})

router.route('/buy').post((req, res) => {
    tradeController.buyTrade(req.body).then(data => res.json(data))
})

router.route('/sell').post((req, res) => {
    tradeController.sellTrade(req.body).then(data => res.json(data))
})


module.exports = router;