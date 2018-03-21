'use strict'

const db = require('../')

async function run () {
  const config = {
    database: process.env.DB_NAME || 'pardsrl_v2',
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || 'password',
    host:     process.env.DB_HOST || 'localhost',
    dialect:  'mysql'
  }

  const { Equipo } = await db(config).catch(handleFatalError)


  const equipos = await Equipo.findAll().catch(handleFatalError)
  console.log('--equipos--')
  console.log(equipos)

  const equipo = await Equipo.findByUuid('FF709446-EC6C-5C41-A6EA-F1CD5CCF4D9F').catch(handleFatalError)
  console.log('--equipo--')
  console.log(equipo)


}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()