const ShowSubscriptionsService = require('./../services/ShowSubscriptionsService');

class ShowSubscriptionsController {
    async handle(request, response) {
        const subscriptions = await ShowSubscriptionsService.execute(request.params.id);

        return response.json(subscriptions);
    }
}

module.exports = new ShowSubscriptionsController;