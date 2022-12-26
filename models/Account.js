const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes, Model) => {

    class Accounts extends Model {}

    Accounts.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            ref: "User"
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
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
        modelName: 'accounts'
    })

    return Accounts;

}