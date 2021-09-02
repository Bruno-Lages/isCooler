const Room = require('./../models/Room');

class ShowRoomController {
    async execute(id) {
        const room = await Room.findByPk(id, {
            include: {
                association: 'modulesData',
                include: {
                    association: 'videos',
                }
            }
        });

        if (!room) throw new Error('inexistent room');

        return room;
    }
}

module.exports = new ShowRoomController;