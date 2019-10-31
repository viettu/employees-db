const app = module.exports = require('express')();

// welcome
app.get('/', (req, res) => {
    res.send({msg: 'Hello, welcome to the employess API'});
});

// define routes
app.use('/departments', require('./departments'));

// fallback routes
app.all('*', (req, res) => {
    res.status(404).send({msg: 'Not found'});
});

