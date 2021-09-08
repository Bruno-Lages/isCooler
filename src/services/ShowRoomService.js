const Room = require('./../models/Room');

class ShowRoomController {
    async execute(code) {
        const room = await Room.findOne( {
            where: {
                code
            },
            include: [{
                association: 'adminId',
                attributes: ['cloudinary'],
            },
            {
                association: 'modulesData',
                include: {
                association: 'videos',
            },
            }]
        });

        if (!room) throw new Error('inexistent room');

        return room;
    }
}

module.exports = new ShowRoomController;