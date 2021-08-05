const DeleteVideoService = require('./../services/DeleteVideoService');

class DeleteVideoController {
    async handle(request, response) {
        const deleted = await DeleteVideoService.execute(request.userId, request.params.id);

        return response.json(deleted);
    }
}

module.exports = new DeleteVideoController;