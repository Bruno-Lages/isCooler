const Room = require('./../models/Room');

class ShowWatchedVideosService {
    async execute(code, user) {

        if (!user || !id) throw new Error('missing data');

        const watchedVideos = await Room.findOne({
            where: {
                code
            },
            include: {
                association: 'modulesData',
                include: {
                    association: 'videos',
                    include: {
                        association: 'viewers',
                        attributes: { exclude: ['secret', 'key']},
                        where: {
                            id: user
                        },

                    }
                }
            }
        });

        if (!watchedVideos) throw new Error('inexistent room');

        return watchedVideos;
}
}

module.exports = new ShowWatchedVideosService;