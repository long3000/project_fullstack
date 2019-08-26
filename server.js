const express = require('express');
const fetch = require('./actions/fetch');
const db = require('./models/db');
const queries = require('./models/createDB');
const createUser = require('./routes/createUser');
const fetchUser = require('./routes/fetchUser');
const colors = require('colors');


const app = express();
app.use(express.json({ limit: '1mb' }));

fetchUser(app);
createUser(app);

app.post('/testpost', (req, res, next) => {
    res.setHeader('Content-Type','application/json');
    
    // res.send(JSON.stringify({
    //     param1: req.body.value1 || null,
    //     param2: req.body.value2 || null,
    // }));

    console.log('Request posted: '+req.body.value1+' & '+req.body.value2 .green);

});

const PORT = 8080;
// Start the app when connection is ready
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT} .` .blue));

db.connect(function(err) {
    if (err) {
        console.error("ERROR unable to connect to MySQL: " + err.stack)
    }
    console.log('Connected to MySQL' .blue);
    // Create User info DB
    db.query(queries.createDatabase, (err, result) => {
        if (err) {
            console.error(err);
        }
        console.log("USERS DATABASE Created !" .blue);
    });
    // Create User locations DB
    db.query(queries.createDatabaseLocations, (err, result) => {
        if (err) {
            console.err(err);
        }
        console.log("LOCATIONS DATABASE Created !" .blue);
    });
});
