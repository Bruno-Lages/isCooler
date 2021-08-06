const CreateSubscriptionService = require('./../services/CreateSubscriptionService');

class CreateSubscriptionController {
    async handle(request, response) {
        const subscription = await CreateSubscriptionService.execute(request.userId, request.body);

        return response.json(subscription);
    }
}

module.exports = new CreateSubscriptionController;