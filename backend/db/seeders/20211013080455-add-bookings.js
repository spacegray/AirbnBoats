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
         boatId: 4,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 5,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 6,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 7,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 1,
         userId: 4,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 8,
         userId: 1,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 6,
         userId: 2,
         startDate: new Date(),
         endDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         boatId: 2,
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
