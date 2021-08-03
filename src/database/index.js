const {Sequelize} = require('sequelize');
const dbconfig = require('./dbconfig');

const dbconnection = new Sequelize(dbconfig);

const User = require('./../models/User');

const models = [User];

models.forEach((model) => model.init(dbconnection));