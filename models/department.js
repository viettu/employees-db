const pool = require('../db');

function getAllDepartments(callback) {
    const sql = `select * from departments`;
    pool.query(sql, (err, rows) => {
        console.log(rows);
        callback(err, rows)
    });
}

module.exports = {
    getAllDepartments
}