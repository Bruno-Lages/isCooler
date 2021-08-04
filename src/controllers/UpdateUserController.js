const UpdateUserService = require('./../services/UpdateUserService');

class UpdateUserController {
    async handle(request, response) {
        const update = await UpdateUserService.execute(request.userId, request.params.id, request.body);
        return response.json(update);
    }
}

module.exports = new UpdateUserController;