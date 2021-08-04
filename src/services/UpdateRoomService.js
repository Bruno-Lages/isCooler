const Room = require('./../models/Room');

class UpdateRoomController {
    async execute(userId, id, updates) {
        if (!userId || !id || !updates) throw new Error('missing data');

        const room = await Room.findByPk(id);
        if (!room) throw new Error('inexistent room');

        console.log(room);
        if (room.admin !== userId) throw new Error('permission denied');

        if(updates.id) throw new Error('You can\'t change the room id');

        return await room.update(updates);
    }
}

module.exports = new UpdateRoomController;