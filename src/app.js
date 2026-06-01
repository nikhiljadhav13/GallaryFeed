const express = require('express')
const multer = require('multer')


const app = express()
app.use(express.json())   // middle ware( this ware for text)

const upload = multer({storage: multer.memoryStorage()}) // this multer middle ware is for reading files



app.post('/create-post', upload.single("image-1"), (req,res)=>{

    console.log(req.body)
    console.log(req.file)
})

module.exports = app