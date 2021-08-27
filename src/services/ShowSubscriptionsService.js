const Room = require("../models/Room");

class ShowSubscriptionsService {
    async execute(id) {
        const room = await Room.findOne({
            where: {
                id
            },
            include: {
                association: 'subscribeds',
                attributes: { exclude: ['secret', 'key']}
            },
        });
        if (!room) throw new Error('inexistent room');

        return room;
    }
}

module.exports = new ShowSubscriptionsService;