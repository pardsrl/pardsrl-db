'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupEquipoModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('equipo', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    modelo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tel: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    activo: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    conectado: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: false,
      field: 'fecha_creacion'
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: false,
      field: 'fecha_actualizacion'
    }
  },{
    freezeTableName: true,
    timestamps: true,
    deletedAt: false,
    //paranoid: true
  })
}