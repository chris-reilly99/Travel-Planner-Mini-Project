const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Trips extends Model {}

Trips.int(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        trip_budget: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        traveller_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'traveller',
                key: 'id',
            },
        },
        location_id: {
            type: DataTypes.STRING,
            references: {
                model: 'location',
                key: 'id',
            },
        }
    }
);

module.exports = Traveller;

// traveller_id: non-unique foreign key that references the Traveller model's id field (Traveller.id)

// location_id: non-unique foreign key that references the Location model's id field (Location.id)

