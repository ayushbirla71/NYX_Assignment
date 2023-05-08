const aws = require("aws-sdk");
require('dotenv').config()

aws.config.update({
    accessKeyId: process.env.Aws_AccessKeyId,
    secretAccessKey: process.env.Aws_SecretAccessKey,
    region: process.env.Aws_Region
})

let uploadFile = async (file) => {
    return new Promise(function (resolve, reject) {
      
        let s3 = new aws.S3({ apiVersion: '2006-03-01' }); 

        var uploadParams = {
            ACL: "public-read",
            Bucket: "classroom-training-bucket",  
            Key: "project-5/" + file.originalname,  
            Body: file.buffer
        }

        s3.upload(uploadParams, function (err, data) {
            if (err) {
                return reject({ "error": err })
            }
            console.log("file uploaded succesfully")
            return resolve(data.Location)
        })
    })
}

const getImage = async function (files) {

    try {
          let urls=[];

          for(let i=0; i<files.length; i++){
              let uploadedFileURL = await uploadFile(files[i])
              urls.push(uploadedFileURL)
          }
            return urls
    }
    catch (err) {
       return  err.message 
    }
}

module.exports = { getImage };