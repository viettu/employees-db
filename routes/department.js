const express = require('express');
const router = express.Router();
const departmentModel = require('../models/department');

router.get('/', (req, res) => {
    departmentModel.getAllDepartments((err, rows) => {
        // handel errors here
        res.send(rows);
    })
})

module.exports = router;