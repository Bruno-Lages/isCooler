'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('videos', 'description', { type: Sequelize.STRING, allowNull: true });
        await queryInterface.addColumn('videos', 'duration', { type: Sequelize.FLOAT, allowNull: true });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('videos', 'description');
        await queryInterface.removeColumn('videos', 'duration');

    }
};
