const {Sequelize} = require('sequelize');
const dbconfig = require('./dbconfig');

const dbconnection = new Sequelize(dbconfig);

const User = require('./../models/User');
const Room = require('./../models/Room');
const Module = require('./../models/Module');
const Video = require('./../models/Video');

const models = [User, Room, Module, Video];

models.forEach((model) => model.init(dbconnection));
models.forEach((model) => model.associate && model.associate(dbconnection.models));