const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Traveller extends Model {}

Traveller.int(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        }
    }
);

module.exports = Traveller;