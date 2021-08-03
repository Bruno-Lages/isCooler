require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('./../models/User');

//the authentication is made by firebase in the frontend
class CreateTokenService {
    async execute({email, id}) {
        const emailExists = await User.findOne({where: {email}});
        if (!emailExists) throw new Error('check if your email is corrrect');
        
        const user = await User.findByPk(id);
        if (!user) throw new Error('id inexistent');

        const token = jwt.sign({email}, process.env.JWT_SECRET, { subject: user.id})

        return token

    }
}

module.exports = new CreateTokenService;