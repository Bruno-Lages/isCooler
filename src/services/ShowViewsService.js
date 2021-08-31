const User = require("../models/User");

class ShowViewsService {
    async execute(userId, { module }) {
        if (!userId || !module) throw new Error('missing data');
        const watched = await User.findByPk(userId, {
            include: {
                association: 'watched',
                where: {
                    module
                }
            }
        });

        return watched;
    }
}

module.exports = new ShowViewsService;