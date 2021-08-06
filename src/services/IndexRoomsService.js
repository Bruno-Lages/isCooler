const Room = require("../models/Room");


class IndexRoomsService {
    async execute() {
        const rooms = await Room.findAll();

        return rooms;
    }
}

module.exports = new IndexRoomsService;