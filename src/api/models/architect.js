const mongoose = require('mongoose')

const architectSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    building: [
      { type: mongoose.Types.ObjectId, ref: 'building', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'architects'
  }
)

const Architect = mongoose.model('architects', architectSchema, 'architects')
module.exports = Architect
