'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boat = sequelize.define(
    "Boat",
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      zipCode: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      img: DataTypes.STRING
    },
    {}
  );
  Boat.associate = function(models) {
    // associations can be defined here
  };
  return Boat;
};