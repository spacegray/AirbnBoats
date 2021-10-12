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
         userId: 1,
         name: "Trimaran",
         address: "13 Place St Francois",
         city: "Nice",
         state: null,
         country: "FR",
         zipCode: 06300,
         price: 2500,
         img: "https://github.com/spacegray/AirbnBoats/blob/tuesday/frontend/images/trimaran.jpg",
       },
       {
         userId: 1,
         name: "Luxury Yacht",
         address: "1099 Bayside Dr",
         city: "Newport Beach",
         state: "CA",
         country: "US",
         zipCode: "92660",
         price: 2000,
         img: "https://github.com/spacegray/AirbnBoats/blob/tuesday/frontend/images/luxury-yacht.jpg",
       },
       {
         userId: 2,
         name: "Sail Boat",
         address: "3030 Holiday Drive",
         city: "Fort Lauderdale",
         state: "FL",
         country: "US",
         zipCode: 33316,
         price: 2500,
         img: "https://github.com/spacegray/AirbnBoats/blob/tuesday/frontend/images/sailboat.jpg",
       },
       {
         userId: 4,
         name: "Tan Luxury Yacht",
         address: "3030 Holiday Drive",
         city: "Fort Lauderdale",
         state: "FL",
         country: "US",
         zipCode: 33316,
         price: 2500,
         img: "https://github.com/spacegray/AirbnBoats/blob/tuesday/frontend/images/sailboat.jpg",
       },
       {
         userId: 2,
         name: "Sail Boat",
         address: "3030 Holiday Drive",
         city: "Fort Lauderdale",
         state: "FL",
         country: "US",
         zipCode: 33316,
         price: 2500,
         img: "https://github.com/spacegray/AirbnBoats/blob/tuesday/frontend/images/sailboat.jpg",
       },
       {
         userId: 2,
         name: "Sail Boat",
         address: "3030 Holiday Drive",
         city: "Fort Lauderdale",
         state: "FL",
         country: "US",
         zipCode: 33316,
         price: 2500,
         img: "https://github.com/spacegray/AirbnBoats/blob/tuesday/frontend/images/sailboat.jpg",
       },
       {
         userId: 2,
         name: "Sail Boat",
         address: "3030 Holiday Drive",
         city: "Fort Lauderdale",
         state: "FL",
         country: "US",
         zipCode: 33316,
         price: 2500,
         img: "https://github.com/spacegray/AirbnBoats/blob/tuesday/frontend/images/sailboat.jpg",
       },
       {
         userId: 2,
         name: "Sail Boat",
         address: "3030 Holiday Drive",
         city: "Fort Lauderdale",
         state: "FL",
         country: "US",
         zipCode: 33316,
         price: 2500,
         img: "https://github.com/spacegray/AirbnBoats/blob/tuesday/frontend/images/sailboat.jpg",
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
