"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 4,
          boatId: 1,
          review: "This yacht was exceptional",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          boatId: 2,
          review: "Amazing yacht, we had the best time",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          boatId: 3,
          review: "We had a great time, highly recommend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          boatId: 11,
          review: "Fun sail boat, would go again",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          boatId: 10,
          review: "Best sailboat in Hawaii",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          boatId: 8,
          review: "Was a great day of fishing on this boat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          boatId: 1,
          review: "This yacht was amazing, great for large groups",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          boatId: 10,
          review: "Best day sailing, it a must",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          boatId: 9,
          review: "They don't call it a super yacht for nothing..",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          boatId: 11,
          review: "Nifty little boat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
