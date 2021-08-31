const ShowViewsService = require('../services/ShowViewsService');

class ShowViewsController {
    async handle(request, response) {
        const watched = await ShowViewsService.execute(request.userId, request.body);

        return response.json(watched);
    }
}

module.exports = new ShowViewsController;