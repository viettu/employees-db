const express = require('express');
const serverConfig = require('./settings.json').server;
const app = express();

app.use('/departments', require('./routes/department'))

app.listen(serverConfig.port, () => {
    console.log(`Start listen on port ${serverConfig.port}`);
});
