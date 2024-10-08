const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('DB works!')
  } catch (error) {
    console.log('Error connecting to DB:', error.message)
  }
}

module.exports = { connectDB }
