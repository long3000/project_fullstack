const fetch = require('../actions/fetch');
const connection = require('../models/db');
const queries = require('../models/createDB');

module.exports = app => {
    app.post('/user/delete', (req, res, next) => {
        // res.send("DELETE USER");
        // console.log("DELETE USER");
        // console.log(req.body.id, req.body.fname);
        // console.log(req.body);
        // console.log(req.body.pid);
      
        connection.query('DELETE FROM user_profiles WHERE id = ?',[req.body.pid] ,
        (error, results, fields) => {
            if(error) console.log(error);
            // console.log(results);
        });
        connection.query('DELETE FROM user_locations WHERE id = ?',[req.body.pid],
        (error, results, fields) => {
            if(error) console.log(error);
            // console.log(results);
        });
        connection.query('DELETE FROM user_logins WHERE id = ?',[req.body.pid],
        (error, results, fields) => {
            if(error) console.log(error);
            // console.log(results);
        });
        res.status(200);
        res.send('success'); 
    });
}

