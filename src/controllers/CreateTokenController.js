const CreateTokenService = require('./../services/CreateTokenService');

class CreateTokenController {
    async handle(request, response) {
        const token = await CreateTokenService.execute(request.body);
        return response.json(token);
    }
};

module.exports = new CreateTokenController;