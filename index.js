'use strict'

const setupDatabase = require('./lib/db')
const setupEquipoModel = require('./models/equipo')
const setupEquipo = require('./lib/equipo')
const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const EquipoModel = setupEquipoModel(config)

  await sequelize.authenticate()

  const Equipo = setupEquipo(EquipoModel)

  return {
    Equipo
  }
}