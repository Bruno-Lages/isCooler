const DeleteUserService = require('./../services/DeleteUserService');

class DeleteUserController {
    async handle(request, response) {
        const deletedUser = await DeleteUserService.execute(request.userId, request.params.id);
        return response.json(deletedUser);
    }
}

module.exports = new DeleteUserController;