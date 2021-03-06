require('dotenv').config();

module.exports = {
    dialect: process.env.DATABASE_DIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
          },
    },
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
}