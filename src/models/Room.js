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

            code: {
                type: DataTypes.STRING,
                validate: {
                    isAlphanumeric: true,

                },
                unique: true,
                allowNull: true,
                defaultValue: Math.random().toString(36).slice(2),
            },

            cover: {
                type: DataTypes.STRING,
                validate: {
                    isUrl: true,
                },
                allowNull: true,
            }

        }, { sequelize: dbconnection, tableName: 'rooms' })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'admin', as: 'adminId' });
        this.hasMany(models.Module, {foreignKey: 'room', as: 'modulesData'});
        this.belongsToMany(models.User, { through: 'subscriptions', foreignKey: 'room', as: 'subscribeds' });
    }
}

module.exports = Room;