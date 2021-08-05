const ShowRoomModulesService = require('./../services/ShowModuleService');

class ShowRoomModulesController {
    async handle(request, response) {
        const modules = await ShowRoomModulesService.execute(request.params.id);

        return response.json(modules);
    }
}

module.exports = new ShowRoomModulesController;