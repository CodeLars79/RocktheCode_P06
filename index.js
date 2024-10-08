require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const buildingRoutes = require('./src/api/routes/building')
const architectsRoutes = require('./src/api/routes/architect')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/architects', architectsRoutes)
app.use('/api/v1/buildings', buildingRoutes)

app.use('/ping', (req, res, next) => {
  return res.status(200).json('pong')
})

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('server deployed at http://localhost:3000')
})
