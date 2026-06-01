const mongoose = require('mongoose')

async function connectDB(){

    await mongoose.connect("mongodb+srv://user1:VncisR7BIs1J2Jsn@galleryfeed.qsjaf1s.mongodb.net/gallaryfeed")

    console.log("server is connected to DB")
}

module.exports = connectDB