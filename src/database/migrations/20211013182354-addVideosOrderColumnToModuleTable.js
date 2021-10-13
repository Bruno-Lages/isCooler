'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('modules', 'videos_order', { type: Sequelize.ARRAY(Sequelize.INTEGER), allowNull: true });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('modules', 'videos_order');

    }
};
