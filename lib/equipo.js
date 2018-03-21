
'use strict'

module.exports = function setupEquipo (EquipoModel) {
  async function createOrUpdate (equipo) {
    const cond = {
      where: {
        uuid: equipo.uuid
      }
    }

    const existingEquipo = await EquipoModel.findOne(cond)

    if (existingEquipo) {
      const updated = await EquipoModel.update(equipo, cond)
      return updated ? EquipoModel.findOne(cond) : existingEquipo
    }

    const result = await EquipoModel.create(equipo)
    return result.toJSON()
  }

  function findById (id) {
    return EquipoModel.findById(id)
  }

  function findByUuid (uuid) {
    return EquipoModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return EquipoModel.findAll()
  }

  function findConnected () {
    return EquipoModel.findAll({
      where: {
        conectado: true
      }
    })
  }

  function findByNombre (nombre) {
    return EquipoModel.findAll({
      where: {
        nombre,
        conectado: true
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll,
    findConnected,
    findByNombre
  }
}