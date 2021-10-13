'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('modules', 'videosOrder', { type: Sequelize.ARRAY(Sequelize.INTEGER), allowNull: true });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('modules', 'videosOrder');

    }
};
