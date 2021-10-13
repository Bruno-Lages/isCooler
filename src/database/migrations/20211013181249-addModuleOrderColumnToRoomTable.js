'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('rooms', 'modulesOrder', { type: Sequelize.ARRAY(Sequelize.INTEGER), allowNull: true });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('rooms', 'modulesOrder');

    }
};
