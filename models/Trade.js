const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes, Model) => {

    class Trades extends Model {}

    Trades.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            unique: true
        },
        shares: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
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
        modelName: 'trades'
    })

    return Trades;

}