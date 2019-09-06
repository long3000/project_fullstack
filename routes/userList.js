const connection = require('../models/db');
const cors = require('cors');

module.exports = app => {
    app.get('/users', cors(), (req, res, next) => {
        connection.query('SELECT id,uuid,gender,firstname,\
        lastName,title,email,dob,picture FROM user_profiles\
        ', (error, results) => {
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