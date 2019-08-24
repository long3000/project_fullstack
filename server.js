const express = require('express');
// const fetch = require('node-fetch');
const fetch = require('./actions/fetch');

const app = express();

const URL = 'https://api.randomuser.me';

app.get('/user', (req, res) => {
    res.send(fetch.FetchProfile());
});

const PORT = 8080;
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT} .`));
