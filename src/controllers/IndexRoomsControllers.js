const IndexRoomsService = require('./../services/IndexRoomsService');

class IndexRoomsController {
    async handle(request, response) {
        const rooms = await IndexRoomsService.execute();

        return response.json(rooms);
    }
}

module.exports = new IndexRoomsController;