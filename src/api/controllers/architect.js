const Architect = require('../models/architect')

// CRUD -> create read update delete

//Create
const postArchitects = async (req, res, next) => {
  try {
    const newArchitect = new Architect(req.body)
    const architectSaved = await newArchitect.save()
    return res.status(201).json(architectSaved)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Bad Request', error: error.message })
  }
}
//Read
const getArchitects = async (req, res, next) => {
  try {
    const allArchitects = await Architect.find().populate('building')
    return res.status(200).json(allArchitects)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Bad Request', error: error.message })
  }
}

//Update
const updateArchitects = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldArchitect = await Building.findById(id)
    const newArchitect = newArchitect(req.body)
    newArchitect._id = id
    newArchitect.building = [...oldArchitect.building, ...req.body.building]
    const updatedArchitect = await Architect.findByIdAndDelete(id, newArchitect)
    return res.status(200).json(updatedArchitect)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Bad Request', error: error.message })
  }
}

//Delete
const deleteArchitects = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedArchitect = await Architect.findByIdAndDelete(id)
    return res.status(200).json(deletedArchitect)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Bad Request', error: error.message })
  }
}

module.exports = {
  getArchitects,
  postArchitects,
  updateArchitects,
  deleteArchitects
}
