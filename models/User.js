const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes, Model) => {

    class Users extends Model {}

    Users.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'users'
    })

    return Users;

}