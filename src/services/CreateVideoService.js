require('dotenv');
const Video = require('./../models/Video');
const Module = require('./../models/Module');
const path = require('path');
const DataUriParser = require('datauri/parser');
const cloudinary = require('cloudinary').v2;
const User = require('../models/User');
const { response } = require('express');
const parser = new DataUriParser();
 
function dataParser(file) {
    const extname = path.extname(file.originalname).toString();
    const file64 = parser.format(extname, file.buffer);
    return file64.content;
}


class CreateVideoService{
    async execute(userId, video, { name, module, description }) {
        if (!name || !video || !module) throw new Error('missing data');

        const moduleExists = await Module.findByPk(module, { include: [
            { association: 'roomData' }, { association: 'videos' } 
        ]});
        if (!moduleExists) throw new Error('inexistent module');

        if (moduleExists.roomData.admin !== userId) throw new Error('permission denied');

        const { key, secret } = await User.findByPk(userId);
        const cloudInfo = await User.findByPk(userId);
        const cloudName = cloudInfo.cloudinary;

        if (!key || !secret || !cloudName) throw new Error('missing cloudinary credentials');

        cloudinary.config({
            cloud_name: cloudName,
            api_key: key,
            api_secret: secret,
        });
        
        console.log({ name, module, userId, cloudName, key, secret });
        console.log('indo...');
        const data = await cloudinary.uploader.upload(dataParser(video), {
            resource_type: 'video',
            quality: 'auto',
            format: 'mp4',
        }, (error, result) => {
            if (error) console.log(result, error);
        });
        console.log('done');
        const { secure_url, duration } = data;
        
        const previousVideos = moduleExists.videos.sort((a, b) => b.order - a.order);
        
        const order = previousVideos.length > 0 ? previousVideos[0].order + 1000 : 1000;
        
        await Video.create({name, url: secure_url, module, order, duration, description});
        
        return { name, module, order, duration };

    }
}

module.exports = new CreateVideoService;