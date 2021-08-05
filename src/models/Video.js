const { Model, DataTypes, Sequelize } = require('sequelize');
const { v4 } = require('uuid');

class Video extends Model {
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

            url: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isUrl: true
                },
            },

            order: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        }, { sequelize: dbconnection, tableName: 'videos' })
    }

    static associate(models) {
        this.belongsTo(models.Module, { foreignKey: 'module', as: 'moduleData' });
    }
}

module.exports = Video;