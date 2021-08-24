const CreateVideoService = require('../services/CreateVideoService');

class CreateVideoController {

    async handle(request, response) {
        try {
            const data = await CreateVideoService.execute(request.userId, request.file, request.body);
            return response.json(data);
        }catch(e) {
            return response.status(400).json({error: e.message});
        }
    }
}

module.exports = new CreateVideoController;