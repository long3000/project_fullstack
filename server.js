const express = require('express');
const fetch = require('./actions/fetch');
const db = require('./models/db');
const queries = require('./models/createDB');
const createUser = require('./routes/createUser');
const fetchUser = require('./routes/fetchUser');
const colors = require('colors');

const app = express();


fetchUser(app);
createUser(app);

app.post('/testpost', (req, res) => {
    console.log(req);
});

const PORT = 8080;
// Start the app when connection is ready
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT} .` .blue));

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
