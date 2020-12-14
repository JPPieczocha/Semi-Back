'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  empleados.init({
    dni:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    sueldo: DataTypes.FLOAT,
    contacto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'empleados',
  });
  return empleados;
};