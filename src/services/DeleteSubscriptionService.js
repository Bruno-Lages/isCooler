const { associations } = require('../models/User');
const User = require('../models/User');
const Room = require('./../models/Room');

class DeleteSubscriptionService {
    async execute(userId, {roomId, subscribedId}) {
        const room = await Room.findByPk(roomId);
        if (!room) throw new Error('inexistent room');

        
        const subscribed = await User.findByPk(subscribedId);
        if (!subscribedId) throw new Error('inexistent user');
        
        if (room.admin === userId || subscribed.id === subscribedId) {
            const deletedSubscription = await room.removeSubscribeds(subscribed);
            return deletedSubscription;
        };
        
        throw new Error('permission denied');

    }
}

module.exports = new DeleteSubscriptionService;