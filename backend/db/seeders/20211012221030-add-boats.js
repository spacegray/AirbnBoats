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
         id: 1,
         userId: 1,
         name: "Trimaran",
         address: "13 Place St Francois",
         city: "Nice",
         state: null,
         country: "FR",
         zipCode: 16300,
         price: 3000,
         img: "https://cdn.pixabay.com/photo/2017/10/01/18/48/trimaran-2806621_960_720.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 2,
         userId: 1,
         name: "Luxury Yacht",
         address: "1099 Bayside Dr",
         city: "Newport Beach",
         state: "CA",
         country: "US",
         zipCode: "92660",
         price: 2500,
         img: "https://cdn.pixabay.com/photo/2016/08/25/16/47/luxury-yacht-1620040_960_720.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 3,
         userId: 1,
         name: "Sail Yacht",
         address: "3030 Holiday Drive",
         city: "Fort Lauderdale",
         state: "FL",
         country: "US",
         zipCode: 33316,
         price: 1500,
         img: "https://cdn.pixabay.com/photo/2013/08/12/18/08/sailing-yacht-171900_960_720.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 4,
         userId: 4,
         name: "Tan Luxury Yacht",
         address: "46 Green Pleasure Pier",
         city: "Avalon",
         state: "CA",
         country: "US",
         zipCode: 90704,
         price: 2500,
         img: "https://cdn.pixabay.com/photo/2016/03/01/10/37/boat-1230051_960_720.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 5,
         userId: 5,
         name: "Motor Yacht",
         address: "3030 Holiday Drive",
         city: "Fort Lauderdale",
         state: "FL",
         country: "US",
         zipCode: 33316,
         price: 2000,
         img: "https://cdn.pixabay.com/photo/2015/02/16/15/10/motor-yacht-638390_960_720.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 6,
         userId: 6,
         name: "Small Sail Boat",
         address: "102 W Broadway,",
         city: "Port Jefferson",
         state: "NY",
         country: "US",
         zipCode: 11777,
         price: 1000,
         img: "https://cdn.pixabay.com/photo/2020/07/21/20/16/yacht-5427299_960_720.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 7,
         userId: 7,
         name: "Fly Fishing Boat",
         address: "100 Frankfort Ave",
         city: "Elberta",
         state: "MI",
         country: "US",
         zipCode: 49628,
         price: 75,
         img: "https://img1.wsimg.com/isteam/ip/e11b36d7-e0ff-4727-b9f7-714afed575df/20190520_160644%20WEBSITE.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 8,
         userId: 4,
         name: "Aruba Fishing Boat",
         address: "L.G. Smith Blvd. 7",
         city: "Surfside Beach",
         state: "Oranjestad",
         country: "AW",
         zipCode: null,
         price: 100,
         img: "https://www.uncommoncaribbean.com/wp-content/uploads/2016/12/wsi-imageoptim-Aruba-fishing-boat.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 9,
         userId: 7,
         name: "Super Yacht",
         address: "4200 N Flagler Dr",
         city: "West Palm Beach",
         state: "FL",
         country: "US",
         zipCode: 33407,
         price: 20000,
         img: "https://cdn.pixabay.com/photo/2018/06/17/17/00/boat-3480914_1280.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 10,
         userId: 4,
         name: "Aloha Sail",
         address: "L.G. Smith Blvd. 7",
         city: "7192 Kalanianaole Hwy",
         state: "Honolulu",
         country: "HI",
         zipCode: 96825,
         price: 400,
         img: "https://cdn.pixabay.com/photo/2019/02/06/21/43/powerboat-3980078_960_720.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         id: 11,
         userId: 4,
         name: "Sail Away",
         address: "1099 Bayside Dr",
         city: "Newport Beach",
         state: "CA",
         country: "US",
         zipCode: 92660,
         price: 600,
         img: "https://cdn.pixabay.com/photo/2015/07/23/17/33/yacht-857261_960_720.jpg",
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
   return queryInterface.bulkDelete('Boats', null, {});
  }
};
