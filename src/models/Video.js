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

            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            duration: {
                type: DataTypes.REAL,
                allowNull: false,
            }
        }, { sequelize: dbconnection, tableName: 'videos' })
    }

    static associate(models) {
        this.belongsTo(models.Module, { foreignKey: 'module', as: 'moduleData' });
        this.belongsToMany(models.User, { through: 'views', foreignKey: 'video', as: 'viewers' })
    }
}

module.exports = Video;