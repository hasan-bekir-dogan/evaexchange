const { connect } = require('../config/db.config');

class UserRepository {
    db = {}

    constructor() {
        this.db = connect();
        
        this.db.sequelize.sync({force: true}).then(() => {
            console.log('Drop and re-sync db.')

            this.db.users.bulkCreate([
                { username: "hasan", name: "Hasan" },
                { username: "bekir", name: "Bekir" },
                { username: "duygu", name: "Duygu" },
                { username: "zeynep", name: "Zeynep" },
                { username: "omer", name: "Ömer" },
            ]).then(() => console.log("Users data have been saved"));

        })
    }

    async getUsers() {
        try {
            const users = await this.db.users.findAll();
            return users;
        } catch (error) {
            return {
                error
            }
        }
    }
}

module.exports = new UserRepository()


