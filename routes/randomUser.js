const fetch = require('../actions/fetch');

module.exports = app => {
    app.get('/user', (req, res, next) => {
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