'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tareas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tareas.belongsTo(models.empleados, {
        as: 'empleados',
        foreignKey: 'dni'
      })
    }
  };
  tareas.init({
    dni: DataTypes.INTEGER,
    vencimiento: DataTypes.DATE,
    tarea: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tareas',
  });
  return tareas;
};