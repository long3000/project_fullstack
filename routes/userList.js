const connection = require('../models/db');

module.exports = app => {
    app.get('/users', (req, res, next) => {
        connection.query('SELECT * FROM user_profiles;', (error, results) => {
            if(error) {
                next(error);
            }
            res.send(JSON.stringify(results));
        })
    });

//     app.get('/users', function(req, res, next) => {
//     connection.query('select * from members', function (error, results, fields) {
//         if(error) throw error;
//         res.send(JSON.stringify(results));
//     });
// });

}