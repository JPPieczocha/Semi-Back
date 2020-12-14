'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  eventos.init({
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE,
    detalle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'eventos',
  });
  return eventos;
};