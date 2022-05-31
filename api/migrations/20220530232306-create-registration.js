'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      studentID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'People', key: 'id'}
      },
      classRoomID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'ClassRooms', key: 'id'}
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
    await queryInterface.dropTable('Registrations');
  }
};