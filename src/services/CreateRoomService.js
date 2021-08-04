const Room = require('./../models/Room');

class CreateRoomService {
    async execute(admin, {name, description }) {
        console.log({admin, name, description});
        if (!name || !admin) throw new Error('missing data');

        const user = Room.findByPk(admin);
        if (!user) throw new Error('inexistent user');

        const room = Room.create({admin, name, description});

        return room;
    }
}

module.exports = new CreateRoomService;