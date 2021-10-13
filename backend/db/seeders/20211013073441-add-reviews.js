'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
     "Review",
     [
       {
         userId: 4,
         boatId: 23,
         review: "This yacht was exceptional",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 1,
         boatId: 31,
         review: "Amazing yacht, we had the best time",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 1,
         boatId: 27,
         review: "We had a great time, highly recommend",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 1,
         boatId: 32,
         review: "Fun sail boat, would go again",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 7,
         boatId: 32,
         review: "Best sailboat in Hawaii",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 6,
         boatId: 29,
         review: "Was a great day of fishing on this boat",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 4,
         boatId: 1,
         review: "This yacht was exceptional",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 5,
         boatId: 28,
         review: "Best day sailing, it a must",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 8,
         boatId: 31,
         review: "They don't call it a super yacht for nothing..",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 4,
         boatId: 30,
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
   return queryInterface.bulkDelete('Review', null, {});
  }
};
