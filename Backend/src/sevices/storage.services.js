const ImageKit= require('@imagekit/nodejs')

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY   // WE are keeping that private key in env file like production level does
})

async function uploadFile(buffer){

    const result = await imagekit.files.upload({

        file: buffer.toString('base64'),
        fileName: "image-1.jpg"
    
})
 
    return result
}

module.exports = uploadFile