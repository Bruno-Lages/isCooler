const CreateVideoService = require('./../services/CreateVideoService');

class CreateVideoController {
    async handle(request, response) {
        const video = await CreateVideoService.execute(request.userId, request.body);

        return response.json(video);
    }
}

module.exports = new CreateVideoController;