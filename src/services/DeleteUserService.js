const User = require('./../models/User');

class DeleteUserService {
    async execute(id, userId) {
        if (id !== userId) throw new Error('permision denied');

        const user = await User.findByPk(userId);
        if(!user) throw new Error('inexistent user');

        const deletedUser = await user.destroy();
        return deletedUser;
    }
}

module.exports = new DeleteUserService;