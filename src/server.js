const app = require('express');

require('./database');

app().listen(80, () => console.log('oi'));