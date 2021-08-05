const Video = require('./../models/Video');

class UpdateVideoController {
    async execute(userId, videoId, updates) {
        if (!userId || !videoId || !updates) throw new Error('missing data');

        const video = await Video.findByPk(videoId, 
            { 
                include: 
                { 
                    association: 'moduleData', 
                    include: {
                        association: 'roomData',
                    }
                } 
            });

        if (!video) throw new Error('inexistent video');

        if (video.moduleData.roomData.admin !== userId) throw new Error('permission denied');

        if(updates.id) throw new Error('you can\'t change the video id');

        const update = await video.update(updates);

        return update;
    }
}

module.exports = new UpdateVideoController;