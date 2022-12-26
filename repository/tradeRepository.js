const { connect } = require('../config/db.config');

class TradeRepository {
    db = {}

    constructor() {
        this.db = connect();
    }

    async getTrades() {
        try {
            const trades = await this.db.trades.findAll();
            return trades;
        } catch (error) {
            return {
                error
            }
        }
    }

    async createTrade(trade) {
        let data = {};

        try {
            let chars, randomArray, code, trades

            while(true){
                chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                randomArray = Array.from(
                    { length: 3 },
                    (v, k) => chars[Math.floor(Math.random() * chars.length)]
                );

                code = randomArray.join("");
                
                trades = await this.db.trades.findOne({ where: { code } });

                if(trades == null || trades == ''){
                    trade.code = code
                    break;
                }
            }

            data = await this.db.trades.create(trade);
        } catch(err) {
            console.log('Error::' + err);
        }

        return data;
    }

    async updateTrade(trade) {
        let data = {};

        try {
            data = await this.db.trades.update({ shares: trade.shares, price: trade.price}, {
                where: {
                    id: trade.id
                }
            });
        } catch(err) {
            console.log('Error::' + err);
        }

        return {
            Status: 'Successfully Updated'
        };
    }

    async deleteTrade(tradeId) {
        let data = {};

        try {
            data = await this.db.trades.destroy({
                where: {
                    id: tradeId
                }
            });
        } catch(err) {
            console.log('Error::' + err);
        }

        return {
            Status: 'Successfully Deleted'
        };
    }

    async buyTrade(trade) {
        let account = {};

        try {
            const tradeShare = await this.db.trades.findOne({
                where: { code: trade.tradeCode }
            })

            if(tradeShare == null)
                return {Status: 'Failed', Message: `There is no trade that belongs to '${trade.tradeCode}' code`}

            account = await this.db.accounts.create({
                userId: trade.userId,
                type: 'LOSS',
                price: tradeShare.price
            })
        } catch(err) {
            console.log('Error::' + err);
        }

        return {
            Status: 'Successfully Bought',
            account
        };
    }
    
    async sellTrade(trade) {
        let account = {};

        try {
            const tradeShare = await this.db.trades.findOne({
                where: { code: trade.tradeCode }
            })

            if(tradeShare == null)
                return {Status: 'Failed', Message: `There is no trade that belongs to '${trade.tradeCode}' code`}

            account = await this.db.accounts.create({
                userId: trade.userId,
                type: 'PROFIT',
                price: tradeShare.price
            })
        } catch(err) {
            console.log('Error::' + err);
        }

        return {
            Status: 'Successfully Sold',
            account
        };
    }
}


module.exports = new TradeRepository()


