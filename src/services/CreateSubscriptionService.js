const User = require('../models/User');
const Room = require('../models/Room');

class CreateSubscriptionService {
    async execute(userId, { roomId }) {
        const user = await User.findByPk(userId);
        if (!user) throw new Error('inexistent user');

        const room = await Room.findByPk(roomId);
        if (!room) throw new Error('inexistent room');

        const subscription = await room.addSubscribed(user);
        console.log(subscription);

        return subscription;
    }
}

module.exports = new CreateSubscriptionService;