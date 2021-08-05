const Module = require('./../models/Module');

class DeleteModuleService {
    async execute(userId, moduleId) {
        const module = await Module.findByPk(moduleId, {
            include: {
                association: 'roomData'
            }
        });
        if (!module) throw new Error('inexistent module');

        if (module.roomData.admin !== userId) throw new Error('permission denied');

        const deleted = await module.destroy();

        return deleted;

    }
}

module.exports = new DeleteModuleService;