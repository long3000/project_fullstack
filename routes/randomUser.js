const fetch = require('../actions/fetch');
const cors = require('cors');


module.exports = app => {
    // var corsOptions = {
    //     origin: 'http://localhost:5000',
    //     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    //   };

    app.get('/randomuser', cors(), (req, res, next) => {
        fetch.FetchProfile()
            .then(userData => {
                // console.log(userData);
                res.send(userData);
            })
            .catch(err => {
                next(err);
            })
    
    });
}