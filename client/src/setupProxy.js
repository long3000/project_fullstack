const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/user/new', { target: 'http://localhost:5000 '})); // POST ROUTE TO ADD USER
    app.use(proxy('/user', { target: 'http://localhost:5000 '})); // FETCH RANDOM USER DATA
    app.use(proxy('/user/*', { target: 'http://localhost:5000 '})); // FETCH SPECIFIC USER DATA
    app.use(proxy('/users', { target: 'http://localhost:5000 '})); // FETCH RANDOM USER DATA
    
}