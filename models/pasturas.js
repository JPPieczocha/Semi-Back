'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pasturas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pasturas.init({
    tipo: DataTypes.STRING,
    sembrado: DataTypes.STRING,
    renovar: DataTypes.STRING,
    cantidad: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'pasturas',
  });
  return pasturas;
};