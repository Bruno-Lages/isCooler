const DeleteSubscriptionService = require('./../services/DeleteSubscriptionService');

class DeleteSubscriptionController {
    async handle(request, response) {
        const subscription = await DeleteSubscriptionService.execute(request.userId, request.body);

        return response.json(subscription);
    }
}

module.exports = new DeleteSubscriptionController;