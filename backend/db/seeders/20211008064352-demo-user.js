"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "Ashley@user.io",
          username: "Ashley",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "daniel@user.io",
          username: "Daniel",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "alegra@user.io",
          username: "Alegra",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "Zander@user.io",
          username: "Zander",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "angeline@user.io",
          username: "Angeline",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};
