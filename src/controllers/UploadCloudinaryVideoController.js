const UploadCloudinaryVideoService = require('../services/UploadCloudinaryVideoService');

class UploadCloudinaryVideoController {

    async handle(request, response) {
        try{
            const data = await UploadCloudinaryVideoService.execute(request.file);
            return response.json(data);
        }catch(e){
            console.log(e);
        };

    }
}

module.exports = new UploadCloudinaryVideoController;