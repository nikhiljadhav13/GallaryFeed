require('dotenv').config()
const express = require('express')
const multer = require('multer')
const uploadFile = require('./sevices/storage.services')
const postModel = require('./models/post.model')



const app = express()
app.use(express.json())   // middle ware( this ware for text)

const upload = multer({storage: multer.memoryStorage()}) // this multer middle ware is for reading files



app.post('/create-post', upload.single("image-1"), async (req,res)=>{

    
    const result = await uploadFile(req.file.buffer)  // from service provider to access the here
    console.log(result)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return   res.status(201).json({

        message: " post created successfully",
        post
    })
})

app.get('/posts',async(req,res)=>{

    const posts = await postModel.find()

   return res.status(200).json({
        message :"post fetch successfully",
        posts

    })
})

module.exports = app