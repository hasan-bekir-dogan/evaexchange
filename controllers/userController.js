require('dotenv').config()
const { connect } = require('../config/db.config')
const userRepository  = require('../repository/userRepository');

class ToDoController {
    async getUsers() {
        return await userRepository.getUsers()
    }
}

module.exports = new ToDoController()