const User = require('./../models/User');

class ShowUserService {
    async execute(id) {
        const user = await User.findByPk(id);

        if(!user) throw new Error('inexistent user');
        
        return user;
    }
}

module.exports = new ShowUserService;