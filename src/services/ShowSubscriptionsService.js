const Room = require("../models/Room");

class ShowSubscriptionsService {
    async execute(code) {
        const room = await Room.findOne({
            where: {
                code
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