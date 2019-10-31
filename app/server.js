const app = require('express')();
const config = require('../config.dev');

app.use(require('./routes'));

app.listen(config.server.port, config.server.host, () => {
    console.log(`Start listening on ${config.server.host}: ${config.server.port}`);
})
