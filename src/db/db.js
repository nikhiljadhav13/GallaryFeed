const mongoose = require('mongoose')

async function connectDB(){

    await mongoose.connect(process.env.MONGO_URI)  // WE are keeping that url in env file like production level does

    console.log("server is connected to DB")
}

module.exports = connectDB