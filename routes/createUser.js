
module.exports = app => {
    app.get('/createuser', (req, res) => {
        return res.send("Test Route Reached\n");
    });
};