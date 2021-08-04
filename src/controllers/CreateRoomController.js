const CreateRoomService = require('./../services/CreateRoomService');

class CreateRoomController {
    async handle(request, response) {
        const room = await CreateRoomService.execute(request.userId, request.body);
        return response.json(room);
    }
}

module.exports = new CreateRoomController;