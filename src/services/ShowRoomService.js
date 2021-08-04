const Room = require('./../models/Room');

class ShowRoomController {
    async execute(id) {
        const room = Room.findByPk(id);

        if (!room) throw new Error('inexistent room');

        return room;
    }
}

module.exports = new ShowRoomController;