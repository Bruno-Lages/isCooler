'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('rooms', 'modules_order', { type: Sequelize.STRING, allowNull: true });
        await queryInterface.addColumn('modules', 'videos_order', { type: Sequelize.STRING, allowNull: true });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('rooms', 'modules_order');
        await queryInterface.removeColumn('modules', 'videos_order');

    }
};
