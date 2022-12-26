require('dotenv').config()
const { connect } = require('../config/db.config')
const tradeRepository  = require('../repository/tradeRepository');
const logger = require('../logger/logger');

class ToDoController {
    async getTrades() {
        return await tradeRepository.getTrades()
    }

    async createTrade(trade) {
        return await tradeRepository.createTrade(trade);
    }

    async updateTrade(trade) {
        return await tradeRepository.updateTrade(trade);
    }

    async deleteTrade(tradeId) {
        return await tradeRepository.deleteTrade(tradeId);
    }

    async buyTrade(trade) {
        logger.info('Controller: buyTrade', trade);
        return await tradeRepository.buyTrade(trade);
    }

    async sellTrade(trade) {
        logger.info('Controller: sellTrade', trade);
        return await tradeRepository.sellTrade(trade);
    }
}

module.exports = new ToDoController()