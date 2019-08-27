const connection = require('../models/db');

module.exports = app => {
    app.get('/users', (req, res, next) => {
        connection.query('SELECT uuid,gender,firstname,\
        lastName,title,email,dob,picture FROM user_profiles\
        GROUP BY 1,2,3,4,5,6,7,8;', (error, results) => {
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