const Module = require('./../models/Module');

class UpdateModuleService {
    async execute(userId, moduleId, updates) {
        const module = await Module.findByPk(moduleId, {
            include: {
                association: 'roomData'
            }
        });
        if (!module) throw new Error('inexistent module');
        if (module.roomData.admin !== userId) throw new Error('permission denied');

        if (updates.id) throw new Error('You can\'t change your id');

        const update = await module.update(updates);

        return update;
    }
}

module.exports = new UpdateModuleService;