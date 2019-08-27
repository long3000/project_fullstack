const fetch = require('../actions/fetch');
const connection = require('../models/db');
const queries = require('../models/createDB');
const updateEmail = require('../middlewares/sendMail');

module.exports = app => {
    app.post('/user/update', (req, res, next) => {
        const jsonBlob = req.body;
        if(jsonBlob['uuid'] === undefined) {
            console.log("WRONG DATA FORMAT");

            res.status(404)        // HTTP status 404: NotFound
                .send('Not found');
        }
        connection.query("UPDATE user_profiles \
            SET gender = ?,\
                firstname = ?,\
                lastName = ?,\
                title = ?,\
                email = ?,\
                dob = ?,\
                picture = ?\
            WHERE uuid = ?;"
            , [jsonBlob.gender,
                jsonBlob.firstname,
                jsonBlob.lastname,
                jsonBlob.title,
                jsonBlob.email,
                jsonBlob.dob,
                jsonBlob.picture,
                jsonBlob.uuid], (err,result) => {
                if(err) {
                    console.error(err);
                    }
                console.log("UPDATED USER INFO !" .green);
                }
            );
            // UPDATE LOCATION DATA
            connection.query("UPDATE user_locations \
            SET street = ?,\
                city = ?,\
                state = ?,\
                postal = ?,\
                country = ?,\
                homephone = ?,\
                cellphone = ?\
            WHERE uuid = ?;"
            , [jsonBlob.street,
                jsonBlob.city,
                jsonBlob.state,
                jsonBlob.postcode,
                jsonBlob.country,
                jsonBlob.homephone,
                jsonBlob.cellphone,
                jsonBlob.uuid], (err,result) => {
                if(err) {
                    console.error(err);
                    }
                console.log("UPDATED USER LOCATION !" .green);
                }
            );
        console.log(jsonBlob.confirmEmail);
        // console.log(jsonBlob.confirmEmail.length);
        if (jsonBlob.confirmEmail === undefined || jsonBlob.confirmEmail.length < 5) {
            console.log("Email unavailable OR inavalid ... !" .red)
        } else {
            updateEmail.updateInfoEmail(jsonBlob.confirmEmail, jsonBlob.firstname);
            console.log("Email Sent! " .blue)
        }
        // if(connection.query())
        // res.send(jsonBlob);
    })
}              
