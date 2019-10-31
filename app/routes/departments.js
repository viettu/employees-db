const app = module.exports = require('express')();
const { getDepartments } = require('../actions').departments;

app.get('/', (req, res) => {
    getDepartments()
    .then((departments) => res.send(departments))
    .catch((err) => res.status(400).send(err))
})