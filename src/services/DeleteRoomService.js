const Room = require('./../models/Room');

class DeleteRoomService {
    async execute(userId, id) {
        const room = await Room.findByPk(id);
        if (!room) throw new Error('inexistent room');

        if (room.admin !== userId) throw new Error('permission denied');

        const deletedRoom = await room.destroy();

        return deletedRoom;
    }
}

module.exports = new DeleteRoomService;