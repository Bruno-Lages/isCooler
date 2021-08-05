const Module = require('./../models/Module');
const Room = require('./../models/Room');

class CreateModuleService {
    async execute(userId, {name, roomId}) {
        if (!name || !roomId) throw new Error('missing data');

        const room = await Room.findByPk(roomId,
            {
            include: {
                association: 'modulesData'
            },
        });
        if (!room) throw new Error('inexistent room');

        if(userId !== room.admin) throw new Error('permission denied');
 
        const previousModules = room.modulesData.sort((a, b) => b.order - a.order);

        const order = previousModules.length > 0 ? previousModules[0].order + 1000 : 1000;
 
        const module = Module.create({name, room: roomId, order});

        return module;
    }
}

module.exports = new CreateModuleService;