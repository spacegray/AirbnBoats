'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
     "Boats",
     [
       {
         "userId": 1,
         "boatType": "yacht",
         "address": "13 Place St Francois",
         "city": "Nice",
         "state": null, "country": "FR", "name": "Trimaran", "price": 2500, "img": ""
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
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
