'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      ClassRoom.hasMany(models.Registration, {
        foreignKey: 'classRoomID'
      });

      ClassRoom.belongsTo(models.People, {
        foreignKey: 'teacherID'
      });

      ClassRoom.belongsTo(models.Levels, {
        foreignKey: 'levelID'
      });

    }
  }
  ClassRoom.init({
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'ClassRoom',
  });
  return ClassRoom;
};