const CreateUserService = require('./../services/CreateUserService');

class CreateUserController {
    async handle(request, response) {
        console.log('controle');
        const newUser = await CreateUserService.execute(request.body);
        return response.json(newUser);
    }
}

module.exports = new CreateUserController;