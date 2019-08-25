const fetch = require('../actions/fetch');
const colors = require('colors');

module.exports = app => {
    app.get('/createuser', (req, res, next) => {
        let dataBlob;
        fetch.FetchProfile()
            .then(userData => dataBlob = userData)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                next(err);
            });
    return res.send("Test Route Reached\n");
    });
};