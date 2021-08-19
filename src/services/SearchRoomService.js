const { Op } = require('sequelize');
const Room = require('./../models/Room');

class SearchRoomService {
    async execute({field, value}) {
        if (!field || !value) throw new Error('missing data');
        if (field !== 'name' && field !== 'admin') throw new Error('incorrect data');

        if (field === 'admin') {
            const room = await Room.findAll({
                where: {
                    admin: {
                        [ Op.like ]: `${admin}%`
                    },
                }
            });
            return room;
        }

        if (field === 'name') {
            const room = await Room.findAll({
                where: {
                    name: {
                        [Op.like]: `%${value}%`
                    }
                }
            });
            return room;
        }

        return room;
    }
}

module.exports = new SearchRoomService;