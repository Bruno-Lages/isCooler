const Module = require('./../models/Module');

class ShowRoomModulesService {
    async execute(room) {
        const modules = await Module.findAll(
            {where: {
                room
            },
            order: [
                ['order', 'ASC'],
            ]}
        );

        if (!modules) throw new Error('nothing found');

        return modules;
    }
}

module.exports = new ShowRoomModulesService;