'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', 
            { 
                id: {
                    type: Sequelize.STRING,
                    primaryKey: true, 
                    allowNull: false,
                },

                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },

                name: {
                    type: Sequelize.STRING,
                },

                photo: {
                    type: Sequelize.STRING
                },

                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false
                },

                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
