const UpdateVideoService = require('./../services/UpdateVideoService');

class UpdateVideoController {
    async handle(request, response) {
        const update = await UpdateVideoService.execute(request.userId, request.params.id, request.body);

        return response.json(update);
    }
}

module.exports = new UpdateVideoController;