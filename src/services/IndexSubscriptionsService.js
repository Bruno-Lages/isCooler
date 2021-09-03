const Room = require('../models/Room');

class IndexSubscriptionsService {
    async execute(userId) {
        const rooms = await Room.findAll({
            include: {
                association: 'subscribeds',
                where: {
                    id: userId
                },
                attributes: ['id'],
            }
        });

        return rooms;
    }
}

module.exports = new IndexSubscriptionsService;