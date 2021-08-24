'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('users', 'cloudinary', { type: Sequelize.STRING, allowNull: true });
        await queryInterface.addColumn('users', 'key', { type: Sequelize.STRING, allowNull: true });
        await queryInterface.addColumn('users', 'secret', { type: Sequelize.STRING, allowNull: true });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('users', 'cloudinary');
        await queryInterface.removeColumn('users', 'key');
        await queryInterface.removeColumn('users', 'secret');
    }
};
