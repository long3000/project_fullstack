const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/randomuser', { target: 'http://localhost:5000'})); // FETCH RANDOM USER DATA
    app.use(proxy('/user/*', { target: 'http://localhost:5000'})); // FETCH SPECIFIC USER DATA
    app.use(proxy('/users', { target: 'http://localhost:5000'})); // FETCH RANDOM USER DATA    
}