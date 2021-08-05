const Video = require('./../models/Video');
const ShowVideoService = require('./ShowVideoService');

class DeleteVideoService {
    async execute(userId, videoId) {
        const video = await Video.findByPk(videoId, {
            include: {
                association: 'moduleData',
                include: {
                    association: 'roomData',
                }
            }
        });

        if (!video) throw new Error('inexistent video');

        if (video.moduleData.roomData.admin !== userId) throw new Error('permission denied');

        const deleted = await video.destroy();

        return deleted;
    }
}

module.exports = new DeleteVideoService;