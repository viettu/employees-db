const db = require('../db');

function getDepartments(callback) {
    return new Promise((resolve, reject) => {
        const sql = `select * from departments`;
        db.query(sql, (err, rows) => {
            if(err) {
                return reject(err);
            }
            return resolve(rows);
        })
    });
}

module.exports = {
    getDepartments
}