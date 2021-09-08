'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('rooms', 'code', { type: Sequelize.STRING, allowNull: false });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('rooms', 'code');

    }
};
