'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassRooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      ClassRooms.hasMany(models.Registrations, {
        foreignKey: 'classRoomID'
      });

      ClassRooms.belongsTo(models.People, {
        foreignKey: 'teacherID'
      });

      ClassRooms.belongsTo(models.Levels, {
        foreignKey: 'levelID'
      });

    }
  }
  ClassRooms.init({
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'ClassRooms',
  });
  return ClassRooms;
};