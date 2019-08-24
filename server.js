const express = require('express');
// const fetch = require('node-fetch');
const fetch = require('./actions/fetch');

const app = express();

app.get('/user', (req, res, next) => {
    fetch.FetchProfile()
        .then(userData => {
            res.send(userData);
        })
        .catch(err => {
            next(err);
        })

});

const PORT = 8080;
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT} .`));
