'use strict';
module.exports = {

  async up(queryInterface, Sequelize) { 
    await queryInterface.createTable('People', { // up cria a migração
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER  // constraint -> restrições
      },
      name: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  
  async down(queryInterface, Sequelize) { 
    await queryInterface.dropTable('People'); // down desfaz a migração
  }
};