const { Sequelize, Model, DataTypes } = require('sequelize');
const { v4 } = require('uuid');

class Module extends Model {
    static init(dbconnection) {
        super.init({
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: () => v4(),
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            order: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            videos_order: {
                type: DataTypes.ARRAY(DataTypes.INTEGER),
                allowNull: true,
            }
        },
        { 
            sequelize: dbconnection, 
            tableName: 'modules',
            hooks: {
                beforeCreate: (room) => {
                    room.modules_order = JSON.parse(room.modules_order);
                }
            }})
    }

    static associate(models) {
        this.belongsTo(models.Room, {foreignKey: 'room', as: 'roomData'});
        this.hasMany(models.Video, { foreignKey: 'module', as: 'videos' });
    }
}

module.exports= Module;