const Building = require('../models/building')

// Create
const postBuildings = async (req, res, next) => {
  try {
    const newBuilding = new Building(req.body)
    const buildingSaved = await newBuilding.save()
    return res.status(201).json(buildingSaved)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Bad Request', error: error.message })
  }
}

// Read
const getBuildings = async (req, res, next) => {
  try {
    const allBuildings = await Building.find()
    return res.status(200).json(allBuildings)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Bad Request', error: error.message })
  }
}

// Update
const updateBuildings = async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedBuilding = await Building.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.status(200).json(updatedBuilding)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Bad Request', error: error.message })
  }
}

// Delete
const deleteBuildings = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedBuilding = await Building.findByIdAndDelete(id)
    return res.status(200).json(deletedBuilding)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Bad Request', error: error.message })
  }
}

module.exports = {
  getBuildings,
  postBuildings,
  updateBuildings,
  deleteBuildings
}
