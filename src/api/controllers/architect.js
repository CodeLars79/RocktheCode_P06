const Architect = require('../models/architect')

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
    const updateData = req.body
    if (updateData.building) {
      // Update using $addToSet to prevent duplicates
      const updatedArchitect = await Architect.findByIdAndUpdate(
        id,
        { $addToSet: { building: { $each: updateData.building } } },
        { new: true }
      )
      return res.status(200).json(updatedArchitect)
    } else {
      const updatedArchitect = await Architect.findByIdAndUpdate(
        id,
        updateData,
        {
          new: true
        }
      )
      return res.status(200).json(updatedArchitect)
    }
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
