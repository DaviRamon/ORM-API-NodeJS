'use strict';
const {Model} = require('sequelize');


/**
 'use strict';

module.exports = (sequelize, DataTypes) => {

  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING

  }, {});

  People.associate(models) {
      // define association here
    }
 
  return People;
};
 */


module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      People.hasMany(models.ClassRoom, {
        foreignKey: 'teacherID'
      });


      People.hasMany(models.Registration, {
        foreignKey: 'studentID'
      });

    };
  }
  People.init({

    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING

  }, {

    sequelize,
    modelName: 'People',

  });
  return People;
};