const mysql = require('mysql');

let pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'zkx',
    user: 'root',
    password: 'root123'
});
// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'root'
// });

// connection.connect();
//
// connection.query('', function (err, rows ,fields) {
//     if (err) throw err;
//     console.log('the solution is:', rows[0].solution);
// });
//
// connection.end();

module.exports = pool;
