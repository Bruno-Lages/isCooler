const Express = require('express');
const cors = require('cors')
require('express-async-errors');

require('./src/database');

const app = Express();

app.use(cors())

app.use(Express.json());
// importing a function that take all the routes and use it
require('./src/routes')(app);

app.use((err, request, response, next) => {
    if (err instanceof Error) return response.status(400).json({
        error: err.message
    })
});

app.listen(process.env.PORT || 8080, () => console.log('oi'));