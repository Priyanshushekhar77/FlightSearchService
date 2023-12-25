'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    airplaneId: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    departureAirportId: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    arrivalAirportId: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    arrivalTime: {
      allowNull:false,
      type:DataTypes.DATE,

    },
    departureTime: {
      allowNull:false,
      type:DataTypes.DATE,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,

    },
    boardingGate: DataTypes.STRING,
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};