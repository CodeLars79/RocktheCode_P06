const mongoose = require('mongoose')

const buildingSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'buildings'
  }
)

const Building = mongoose.model('buildings', buildingSchema, 'buildings')
module.exports = Building
