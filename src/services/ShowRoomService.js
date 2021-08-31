const Room = require('./../models/Room');

class ShowRoomController {
    async execute(id, {user}) {
        console.log(user)
        if (!user) {
        const room = Room.findByPk(id, {
            include: {
                association: 'modulesData',
                include: {
                    association: 'videos',
                }
            }
        });
        return room;
    }
        
        if (user) {
            const roomAndViews = Room.findByPk(id, {
                include: {
                    association: 'modulesData',
                    include: {
                        association: 'videos',
                        include: {
                            association: 'viewers',
                            where: {
                                id: user
                            }
                        }
                    }
                }
            });
            return roomAndViews;
        }

        if (!room || !roomAndViews) throw new Error('inexistent room');

        return (user ? roomAndViews : room);
    }
}

module.exports = new ShowRoomController;