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
    await queryInterface.bulkInsert('Airplanes',[
      {
      modelNumber:'Boeing737',
      capacity:144,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:'cessena172',
      capacity:200,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:'AirbusA320',
      capacity:400,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:'Indigo',
      capacity:170,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:'Boeing777',
      capacity:120,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:'Boeing727',
      capacity:125,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:'Airindia',
      capacity:122,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
