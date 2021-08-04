require('dotenv');
const jwt = require('jsonwebtoken');

function checkLoggedUserMiddleware(request, response, next) {
    if(!request.headers.authorization) throw new Error('you must be logged to acces this page');

    const [,token] = request.headers.authorization.split(' ');
    if (!token) throw new Error('invalid token');

    const validToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(validToken.sub);
    request.userId = validToken.sub;
    console.log(request.userId);

    next();
}

module.exports = checkLoggedUserMiddleware;