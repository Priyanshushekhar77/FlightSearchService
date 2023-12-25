'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
      name:
      'Kempegowda International Airport Bengaluru',
      address:"Bengaluru",
      cityId:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:
      'Mangaluru International Airport',
      address:"Bengaluru",
      cityId:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:
      'Hindustan Aeronautics Limited Airport',
      address:"Bengaluru",
      cityId:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:
      'Jayprakash Narayan International Airport, Patna',
      address:"Patna",
      cityId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:
      'Birsa Munda Airport, Ranchi',
      address:"Ranchi",
      cityId:2,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:
      'Manohar International Airport',
      address:"Goa",
      cityId:5,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:
      'Chaudhary Charan Singh International Airport',
      address:"Lucknow",
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date()
    }



    ],{});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {}); for deletion
     */
  }
};
