'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vacunas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vacuna: {
        type: Sequelize.STRING
      },
      dosis: {
        type: Sequelize.FLOAT
      },
      fecha: {
        type: Sequelize.DATE
      },
      caravana: {
        type: Sequelize.STRING
      },
      aplicada: {
        type: Sequelize.CHAR
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
    await queryInterface.dropTable('vacunas');
  }
};