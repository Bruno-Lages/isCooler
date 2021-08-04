const UpdateRoomService = require('./../services/UpdateRoomService');

class UpdateRoomController {
    async handle(request, response) {
        const update = await UpdateRoomService.execute(request.userId, request.params.id, request.body);

        return response.json(update);
    }
}

module.exports = new UpdateRoomController;