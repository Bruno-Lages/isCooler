const ShowRoomService = require('./../services/ShowRoomService');

class ShowRoomController {
    async handle(request, response) {
        const room = await ShowRoomService.execute(request.params.id);
        return response.json(room);
    }
}

module.exports = new ShowRoomController;