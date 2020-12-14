'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vacas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vacas.init({
    peso: DataTypes.FLOAT,
    peso_fecha: DataTypes.DATE,
    caravana: DataTypes.STRING,
    categoria: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    ingreso: DataTypes.DATE,
    genero: DataTypes.CHAR,
    madre: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'vacas',
  });
  return vacas;
};