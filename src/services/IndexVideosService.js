const Video = require("../models/Video");

class IndexVideosService {
    async execute(module) {
        const videos = await Video.findAll({
            where: {
                module
            }
        });
        if(!videos) throw new Error('nothing found');

        return videos;
    }
}

module.exports = new IndexVideosService;