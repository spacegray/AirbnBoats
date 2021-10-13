'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    boatId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    //  Review.belongsTo(models.User, { foreignKey: "userId" });
     Review.belongsTo(models.Boat, { foreignKey: "boatId" });
  };
  return Review;
};