const fetch = require('../actions/fetch');
const connection = require('../models/db');
const queries = require('../models/createDB');

module.exports = app => {
    app.get('/user/login', (req, res, next) => {
        
        // var uuid = req.params.uuid;
        // const dataFetch = connection.query(queries.findUser,[uuid],
        //     (err, result) => {
        //         if (result[0] === undefined) {
        //             res.sendStatus(404);
        //         } else {
        //             res.send(result[0]);
        //         }
        //     }
        //     );
        // res.send(dataFetch);   
        });
}

