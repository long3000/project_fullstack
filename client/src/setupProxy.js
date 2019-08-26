const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/user', { target: 'http://localhost:8080 '})); // FETCH RANDOM USER DATA
    app.use(proxy('/user/new', { target: 'http://localhost:8080 '})); // POST ROUTE TO ADD USER
}