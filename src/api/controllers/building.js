const Building = require('../models/building')

// CRUD -> create read update delete

//Create
const postBuildings = async (req, res, next) => {
  try {
    const newBuilding = new Building(req.body)
    const buildingSaved = await newBuilding.save()
    return res.status(201).json(buildingSaved)
  } catch (error) {
    return res.status(400).json('Bad Request error')
  }
}
//Read
const getBuildings = async (req, res, next) => {
  try {
    const allBuildings = await Building.find()
    return res.status(200).json(allBuildings)
  } catch (error) {
    return res.status(400).json('Bad Request error')
  }
}

//Update
const updateBuildings = async (req, res, next) => {
  try {
    const { id } = req.params
    const newBuilding = newBuilding(req.body)
    newBuilding._id = id
    const updatedBuilding = await Building.findByIdAndDelete(id, newBuilding)
    return res.status(200).json(updatedBuilding)
  } catch (error) {
    return res.status(400).json('Bad Request error')
  }
}

//Delete
const deleteBuildings = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedBuilding = await Building.findByIdAndDelete(id)
    return res.status(200).json(deletedBuilding)
  } catch (error) {
    return res.status(400).json('Bad Request error')
  }
}

module.exports = {
  getBuildings,
  postBuildings,
  updateBuildings,
  deleteBuildings
}
