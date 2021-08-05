'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('modules', 
        { 
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
            },
            
            name: {
                type:Sequelize.STRING,
                allowNull: false,
            },

            room: {
                type: Sequelize.UUID,
                allowNull: false,
                refence: {
                    model: 'rooms',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
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
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('modules');
    }
};
