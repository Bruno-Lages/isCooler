const User = require('../models/User');
const Room = require('./../models/Room');

class CreateRoomService {
    async execute(admin, {name, description, cover }) {
        console.log({admin, name, description});
        if (!name || !admin || !cover) throw new Error('missing data');

        const user = User.findByPk(admin);
        if (!user) throw new Error('inexistent user');

        const room = Room.create({admin, name, description, cover});

        return room;
    }
}

module.exports = new CreateRoomService;