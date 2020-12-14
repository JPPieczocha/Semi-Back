'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('empleados', {
      dni: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sueldo: {
        type: Sequelize.FLOAT
      },
      contacto: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('empleados');
  }
};