'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
     "Bookings",
     [
       {
         boatId: 26,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 27,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 29,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 32,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 33,
         userId: 4,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 28,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 30,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 23,
         userId: 4,
         startDate: new Date(),
         endDate: new Date(),
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
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
