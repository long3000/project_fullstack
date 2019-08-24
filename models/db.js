const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: "104.198.246.167",
    port: "3306",
    // socketpath: '/cloudsql/local-scope-250804:us-central1:userprofiles',
    user: "test",
    password: "password",
    database: "profiles"
});

module.exports = connection;