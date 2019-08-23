const express = require('express');
const fetch = require('node-fetch');

const app = express();

const PORT = 8080;
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT} .`));