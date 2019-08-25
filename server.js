const express = require('express');
const fetch = require('./actions/fetch');
const db = require('./models/db');
const queries = require('./models/createDB');
const colors = require('colors');

const app = express();

app.get('/user', (req, res, next) => {
    fetch.FetchProfile()
        .then(userData => {
            console.log(userData);
            res.send(userData);
        })
        .catch(err => {
            next(err);
        })

});

const PORT = 8080;

db.connect(function(err) {
    if (err) {
        console.error("ERROR unable to connect to MySQL: " + err.stack)
    }
    console.log('Connected to MySQL' .blue);
    db.query(queries.createDatabase, (err, result) => {
        if (err) {
            console.error(err);
        }
        console.log("DATABASE Created !" .blue);
    });
});
// Start the app when connection is ready
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT} .` .bgBlue));