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
        },
        { sequelize: dbconnection, tableName: 'modules'})
    }

    static associate(models) {
        this.belongsTo(models.Room, {foreignKey: 'room', as: 'roomData'});
    }
}

module.exports= Module;