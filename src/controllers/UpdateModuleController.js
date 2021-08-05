const UpdateModuleService = require('./../services/UpdateModuleService');

class UpdateModuleController {
    async handle(request, response) {
        const update = await UpdateModuleService.execute(request.userId, request.params.id, request.body);

        return response.json(update);
    }
}

module.exports = new UpdateModuleController;