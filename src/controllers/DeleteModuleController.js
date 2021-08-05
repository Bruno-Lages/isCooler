const DeleteModuleService = require('./../services/DeleteModuleService');

class DeleteModuleController {
    async handle(request, response) {
        const deleted = await DeleteModuleService.execute(request.userId, request.params.id);

        return response.json(deleted);
    }
}

module.exports = new DeleteModuleController;