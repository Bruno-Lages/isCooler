'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('videos', 
        { 
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false
            },
            
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            url: {
                type: Sequelize.STRING,
                allowNull: false
            },

            module: {
                type: Sequelize.UUID,
                allowNull: false,
                reference: {
                    model: 'modules',
                    key: 'id',
                    onUpdate: 'SET NULL',
                    onDelete: 'SET NULL',
                }
            },

            order: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('videos');
    }
};
