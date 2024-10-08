const mongoose = require('mongoose')

const architectSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'architects'
  }
)

const Architect = mongoose.model('architects', architectSchema, 'architects')
module.exports = Architect
