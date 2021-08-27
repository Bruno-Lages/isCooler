const User = require('./../models/User');

class ShowUserService {
    async execute(userId) {
        const user = await User.findByPk(userId, {
            attributes: { exclude: ['secret', 'key']}
        });

        if(!user) throw new Error('inexistent user');
        
        return user;
    }
}

module.exports = new ShowUserService;