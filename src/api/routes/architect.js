const express = require('express')
const {
  getArchitects,
  postArchitects,
  updateArchitects,
  deleteArchitects
} = require('../controllers/architect')

const architectRoutes = express.Router()

architectRoutes.get('/', getArchitects)
architectRoutes.post('/', postArchitects)
architectRoutes.put('/:id', updateArchitects)
architectRoutes.delete('/:id', deleteArchitects)

module.exports = architectRoutes
