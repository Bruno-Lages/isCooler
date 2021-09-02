const Room = require('./../models/Room');

class ShowWatchedVideosService {
    async execute(id, user) {

        if (!user || !id) throw new Error('missing data');

        const watchedVideos = await Room.findByPk(id, {
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