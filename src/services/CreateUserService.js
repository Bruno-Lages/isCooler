const User = require('../models/User');
const CreateTokenService = require('./CreateTokenService');

class CreateUserService{
    async execute({id, email, name=null, photo=null}){
        console.log({id, email, name, photo});
        if (!id || !email) throw new Error('missing data');
        
        const idAlreadyExists = await User.findByPk(id);
        if (idAlreadyExists) throw new Error('id already exists');
        
        const emailAlreadyExists = await User.findOne({ where: { email }});
        if (emailAlreadyExists) throw new Error('email already exists');

        await User.create({id, email, name, photo});
        const token = await CreateTokenService.execute({id, email});
        return token;
    }
}

module.exports = new CreateUserService;