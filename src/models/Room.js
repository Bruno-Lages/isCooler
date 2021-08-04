const {Sequelize, DataTypes, Model} = require('sequelize');
const { v4 } = require('uuid');

class Room extends Model {
    static init(dbconnection) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue:  () => v4(),
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            description: {
                type: DataTypes.STRING,
            },

        }, { sequelize: dbconnection, tableName: 'rooms' })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'admin', as: 'adminId' })
    }
}

module.exports = Room;