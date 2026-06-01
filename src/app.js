require('dotenv').config()
const express = require('express')
const multer = require('multer')
const uploadFile = require('./sevices/storage.services')


const app = express()
app.use(express.json())   // middle ware( this ware for text)

const upload = multer({storage: multer.memoryStorage()}) // this multer middle ware is for reading files



app.post('/create-post', upload.single("image-1"), async (req,res)=>{

    console.log(req.body)
    console.log(req.file)
    
    const result = await uploadFile(req.file.buffer)  // from service provider to access the here
    console.log(result)

})

module.exports = app