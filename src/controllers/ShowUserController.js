const ShowUserService = require('./../services/ShowUserService');

class ShowUserController {
    async handle(request, response) {
        const user = await ShowUserService.execute(request.params.id);
        return response.json(user);
    }
}

module.exports = new ShowUserController;