const buildings = require('../../data/buildings')
const Building = require('../../api/models/building')
const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://UserName:8tU4HE1jvrECvqVm@cluster0.h3wfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    // Search for all buildings in the collection
    const allBuildings = await Building.find()

    // Existing buildings will be dropped
    if (allBuildings.length) {
      await Building.collection.drop() // The drop function deletes the collection
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    // The buildings array from our data folder will populate our database with all the buildings
    await Building.insertMany(buildings)
    console.log('Buildings successfully seeded to the database')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Disconnection from DB
  .finally(() => mongoose.disconnect())
