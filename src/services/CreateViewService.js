const User = require("../models/User");
const Video = require("../models/Video");

class CreateViewService {
    async execute(userId, {videoId}) {
        if (!userId || !videoId) throw new Error('missing data');

        const user = await User.findByPk(userId, {
            include: {
                association: 'watched',
            }
        });
        if (!user) throw new Error('inexistent user');

        const viewAlreadyExists = user.watched.filter((view) => view.id === videoId);
        if (viewAlreadyExists) throw new Error('already saw this video');
        
        const video = await Video.findByPk(videoId);
        if (!video) throw new Error('inexistent video');

        const view = await video.addViewer(user);

        return view; 
    }
}

module.exports = new CreateViewService;