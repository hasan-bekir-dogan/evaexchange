const { connect } = require('../config/db.config');

class TradeRepository {
    db = {}

    constructor() {
        this.db = connect();
    }

    async getAccounts() {
        try {
            const accounts = await this.db.accounts.findAll();
            return accounts;
        } catch (error) {
            return {
                error
            }
        }
    }

    async getBoughtAccounts() {
        let accounts = {};

        try {
            accounts = await this.db.accounts.findAll({
                where: { type: "LOSS" }
            })
        } catch(err) {
            console.log('Error::' + err);
        }

        return {
            accounts
        };
    }
    
    async getSoldAccounts() {
        let accounts = {};

        try {
            accounts = await this.db.accounts.findAll({
                where: { type: "PROFIT" }
            })
        } catch(err) {
            console.log('Error::' + err);
        }

        return {
            accounts
        };        
    }
    
    async getUserAccounts(userId) {
        let accountsProfit = {};
        let accountsLoss = {};
        let user = {};
        let profitPrice = 0, lossPrice = 0

        try {
            accountsProfit = await this.db.accounts.findAll({
                attributes: [this.db.sequelize.fn('sum', this.db.sequelize.col('price'))],
                where: { userId },
                raw: true,
                group: ['type'],
                having: { type: "PROFIT" }
            })
            accountsLoss = await this.db.accounts.findAll({
                attributes: [this.db.sequelize.fn('sum', this.db.sequelize.col('price'))],
                where: { userId },
                raw: true,
                group: ['type'],
                having: { type: "LOSS" }
            })
            user = await this.db.users.findOne({
                where: { id: userId }
            })
        } catch(err) {
            console.log('Error::' + err);
        }

        if(accountsProfit[0] != null)
            profitPrice = accountsProfit[0].sum
        if(accountsLoss[0] != null)
            lossPrice = accountsLoss[0].sum

        return {
            'userName': user.username,
            'profit': profitPrice,
            'loss': lossPrice
        };        
    }

}


module.exports = new TradeRepository()


