'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClassRooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      teacherID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'People', key: 'id'}
      },
      levelID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Levels', key: 'id'}
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
    await queryInterface.dropTable('ClassRooms');
  }
};