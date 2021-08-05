const Video = require('./../models/Video');

class ShowVideo {
    async execute(id) {
        const video = await Video.findByPk(id);

        if (!video) throw new Error('inexistent video');

        return video
    }
}

module.exports = new ShowVideo;