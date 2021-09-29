const CreateViewService = require('../services/CreateViewService');

class CreateViewController {
    async handle(request, response) {
        const view = await CreateViewService.execute(request.userId, request.body);
        return response.json(view);
    }
}

module.exports = new CreateViewController;