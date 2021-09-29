const User = require("../models/User");
const Video = require("../models/Video");

class DeleteViewService {
    async execute(userId, {videoId}) {
        if (!userId || !videoId) throw new Error('missing data');

        const user = await User.findByPk(userId, {
            include: {
                association: 'watched',
            }
        });
        if (!user) throw new Error('inexistent user');

        const viewExists = user.watched.filter((view) => view.id === videoId);
        if (!viewExists) throw new Error('Video not watched before');
        
        const video = await Video.findByPk(videoId);
        if (!video) throw new Error('inexistent video');

        const view = await video.removeViewer(user);

        return view; 
    }
}

module.exports = new DeleteViewService;