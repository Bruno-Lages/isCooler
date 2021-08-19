const SearchRoomService = require('./../services/SearchRoomService');

class SearchRoomController {
    async handle(request, response) {
        const rooms = await SearchRoomService.execute(request.body);

        return response.json(rooms);
    }
}

module.exports = new SearchRoomController;