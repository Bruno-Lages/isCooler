const { response } = require('express');
const Express = require('express');
require('express-async-errors');

require('./src/database');

const routes = require('./src/routes');
const app = Express();

app.use(Express.json());
app.use(routes);

app.use((err, request, response) => {
    if (err instanceof Error) return response.status(400).json({
        error: err.message
    })
});

app.listen(80, () => console.log('oi'));