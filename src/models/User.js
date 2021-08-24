const { Model, DataTypes } = require('sequelize');

module.exports = class User extends Model {
    static init(dbconnection){
        super.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },

            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: {
                        args: true,
                        msg: 'Invalid Email'
                    }
                }
            },

            name: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
                validate: {
                    len: {
                        args: [3,50],
                        msg: 'The length name must be between 3 and 50 characters'
                    }
                }
            },

            photo: {
                type: DataTypes.STRING,
                defaultValue: null,
                allowNull: true,
                validate: {
                    isUrl: {
                        args: true,
                        msg: 'Not an URL'
                    }
                }
            },

            cloudinary: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },

            key: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },

            secret: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },

        }, {sequelize: dbconnection, tableName: 'users'})
    }

    static associate(models) {
        this.hasMany(models.Room, { foreignKey: 'admin' });
        this.belongsToMany(models.Room, { through: 'subscriptions', foreignKey: 'user', as: 'subscription' })
    }
}