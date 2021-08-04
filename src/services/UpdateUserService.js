const User = require('./../models/User');

class UpdateUserService {
    async execute(id, userId, updates) {
        if (userId !== id) throw new Error('permission denied');
        
        if (updates.id) throw new Error('You can\'t change your id');

        const user = User.findByPk(userId);
        if (!user) throw new Error('inexistent user');

        const update = await (await user).update(updates);
        return update;
    }
}

module.exports = new UpdateUserService();