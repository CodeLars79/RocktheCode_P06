const express = require('express')
const {
  getBuildings,
  postBuildings,
  updateBuildings,
  deleteBuildings
} = require('../controllers/building')

const buildingRoutes = express.Router()

buildingRoutes.get('/', getBuildings)
buildingRoutes.post('/', postBuildings)
buildingRoutes.put('/:id', updateBuildings)
buildingRoutes.delete('/:id', deleteBuildings)

module.exports = buildingRoutes
