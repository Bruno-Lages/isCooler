const usersRoute = require('./routes/usersRoute');
const roomRoute = require('./routes/roomRoute');
const moduleRoute = require('./routes/moduleRoute');
const videoRoute = require('./routes/videoRoute');
const subscriptionRoute = require('./routes/subscriptionRoute');
const viewRoute = require('./routes/viewRoute');

module.exports = function(app) {
    app.use(usersRoute);
    app.use(roomRoute);
    app.use(moduleRoute);
    app.use(videoRoute);
    app.use(subscriptionRoute);
    app.use(viewRoute);
};