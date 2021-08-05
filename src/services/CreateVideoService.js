const Video = require('./../models/Video');
const Module = require('./../models/Module');

class CreateVideoService {
    async execute(userId, {name, url, module}) {
        if (!name || !url || !module) throw new Error('missing data');

        const moduleExists = await Module.findByPk(module, { include: [
            { association: 'roomData' }, { association: 'videos' } 
        ]});
        if (!moduleExists) throw new Error('inexistent module');

        console.log(moduleExists);

        if (moduleExists.roomData.admin !== userId) throw new Error('permission denied');

        const previousVideos = moduleExists.videos.sort((a, b) => b.order - a.order);
        
        const order = previousVideos.length > 0 ? previousVideos[0].order + 1000 : 1000;

        const video = Video.create({name, url, module, order});

        return video;
    }
}

module.exports = new CreateVideoService;