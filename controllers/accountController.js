require('dotenv').config()
const { connect } = require('../config/db.config')
const accountRepository  = require('../repository/accountRepository');

class ToDoController {
    async getAccounts() {
        return await accountRepository.getAccounts()
    }
    
    async getBoughtAccounts() {
        return await accountRepository.getBoughtAccounts()
    }
    
    async getSoldAccounts() {
        return await accountRepository.getSoldAccounts()
    }
    
    async getUserAccounts(userId) {
        return await accountRepository.getUserAccounts(userId)
    }
}

module.exports = new ToDoController()