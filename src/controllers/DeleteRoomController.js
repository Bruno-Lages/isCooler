const DeleteRoomService = require('./../services/DeleteRoomService');

class DeleteRoomController {
    async handle(request, response) {
        const deletedRoom = await DeleteRoomService.execute(request.userId, request.params.id);
        return response.json(deletedRoom);
    }
}

module.exports = new DeleteRoomController;