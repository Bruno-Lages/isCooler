require('dotenv');
const path = require('path');
const DataUriParser = require('datauri/parser');
const cloudinary = require('cloudinary').v2;
const parser = new DataUriParser();
 
function dataParser(file) {
    const extname = path.extname(file.originalname).toString();
    const file64 = parser.format(extname, file.buffer);
    return file64.content;
}

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

class UploadCloudinaryVideoService{
    async execute(video) {
        console.log('indo...');
        const data = await cloudinary.uploader.upload(dataParser(video), {
            resource_type: 'video',
            quality: 'auto',
        }, (error, result) => console.log({ error, result }));
        console.log('done');
        const { url, secure_url, bytes } = data;
        return { url, secure_url, bytes };
    }
}

module.exports = new UploadCloudinaryVideoService;