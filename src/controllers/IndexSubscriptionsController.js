const IndexSubscriptionsService = require('../services/IndexSubscriptionsService');

class IndexSubscriptionsController {
    async handle(request, response) {
        const rooms = await IndexSubscriptionsService.execute(request.userId);

        return response.json(rooms);
    }
}

module.exports = new IndexSubscriptionsController;