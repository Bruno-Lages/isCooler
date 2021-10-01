const DeleteViewService = require('../services/DeleteViewService');

class DeleteViewController {
    async handle(request, response) {
        const view = await DeleteViewService.execute(request.userId, request.body);
        return response.json(view);
    }
}

module.exports = new DeleteViewController; 