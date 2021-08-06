'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('subscriptions', 
        { 
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            user: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                }
            },

            room: {
                type: Sequelize.UUID,
                allowNull: false,
                refences: {
                    model: 'rooms',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
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
        await queryInterface.dropTable('subscriptions');
  }
};
