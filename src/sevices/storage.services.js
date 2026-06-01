const ImageKit= require('@imagekit/nodejs')

const imagekit = new ImageKit({
    privateKey: "private_S2jBnIl43Go2DeYAhNbiJZdZams="
})

async function uploadFile(buffer){

    const result = await imagekit.files.upload({

        file: buffer.toString('base64'),
        fileName: "image-1.jpg"
    
})
 
    return result
}

module.exports = uploadFile