'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('rooms', 
        { 
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            description: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            admin: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                    onUpdate: 'SET NULL',
                    onDelete: 'SET NULL'
                }
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('rooms');
    }
};
