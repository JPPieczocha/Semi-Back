'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vacunas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vacunas.belongsTo(models.vacas,{
        as: 'vacas',
        foreignKey: 'caravana',
      })
    }
  };
  vacunas.init({
    vacuna: DataTypes.STRING,
    dosis: DataTypes.FLOAT,
    fecha: DataTypes.DATE,
    caravana: DataTypes.STRING,
    aplicada: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'vacunas',
  });
  return vacunas;
};