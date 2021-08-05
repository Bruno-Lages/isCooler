const CreateModuleService = require('./../services/CreateModuleService');

class CreateModuleController {
    async handle(request, response) {
        const module = await CreateModuleService.execute(request.userId, request.body);

        return response.json(module);
    }
}

module.exports = new CreateModuleController;