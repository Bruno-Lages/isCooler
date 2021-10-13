'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('rooms', 'modules_order', { type: Sequelize.ARRAY(Sequelize.INTEGER), allowNull: true });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('rooms', 'modules_order');

    }
};
