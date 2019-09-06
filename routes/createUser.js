const fetch = require('../actions/fetch');
const colors = require('colors');
const cors = require('cors');
const queries = require('../models/createDB');
const connection = require('../models/db');

module.exports = app => {
    app.post('/user/new',cors(),(req, res) => {
        var dupCount = 0;
        const jsonBlob = req.body;
        const pushData = jsonBlob.map(info=>({
            uuid: info.uuid,
            gender: info.gender,
            firstname: info.firstname,
            lastName: info.lastname,
            title: info.title,
            email: info.email,
            dob: info.dob,
            picture: info.picture
            }));
        const queryCount = 
            connection.query("SELECT COUNT(1) AS dup FROM user_profiles \
                    WHERE uuid =? OR (firstname =? AND lastname=?)",
                [pushData.uuid, pushData.firstname, pushData.lastname], (err, result) => {
                    // dupCount = result[0].dup;
                    // console.log(result);
                    dupCount += result[0].dup;
                });
        if (dupCount > 0) {
            console.log("USER ALREADY EXISTS." .red);
        } else {
            connection.query("INSERT INTO user_profiles SET ?", jsonBlob.map(info=>({
                uuid: info.uuid,
                gender: info.gender,
                firstname: info.firstname,
                lastName: info.lastname,
                title: info.title,
                email: info.email,
                dob: info.dob,
                picture: info.picture
                })
            ), (err,result) => {
                if(err) {
                    console.error(err);
                    }
                // console.log("ADDED USER !" .green);
            
                }
            );
            connection.query("INSERT INTO user_locations SET ?", jsonBlob.map(info=>({
                uuid: info.uuid,
                street: info.street,
                city: info.city,
                state: info.state,
                postal: info.postcode,
                country: info.country,
                homephone: info.homephone,
                cellphone: info.cellphone
                })
            ), (err,result) => {
                if(err) {
                    console.error(err);
                    }
                // console.log("ADDED LOCATIONS !" .green);
                }
            );
            connection.query("INSERT INTO user_logins SET ?", jsonBlob.map(info=>({
                uuid: info.uuid,
                username: info.username,
                password: info.password
                })
            ), (err,result) => {
                if(err) {
                    console.error(err);
                    }
                // console.log("ADDED LOGINS !" .green);
                }
            );
            console.log("ADDED USER !" .green);
        }
    }
)};

// id INT NOT NULL AUTO_INCREMENT,\
//     uuid VARCHAR(255) NOT NULL, \
//     gender VARCHAR(255) DEFAULT NULL, \
//     firstname VARCHAR(255) NOT NULL,\
//     lastname VARCHAR(255) NOT NULL,\
//     title VARCHAR(20) DEFAULT NULL,\
//     email VARCHAR(255) NOT NULL,\
//     dob VARCHAR(255) NOT NULL,\
//     age INT DEFAULT NULL,\
//     picture VARCHAR(255) DEFAULT NULL,\

// id INT NOT NULL AUTO_INCREMENT,\
// uuid VARCHAR(255) NOT NULL, \
// street VARCHAR(255) DEFAULT NULL, \
// city VARCHAR(255) NOT NULL,\
// state VARCHAR(255) NOT NULL,\
// postal VARCHAR(20) DEFAULT NULL,\
// country VARCHAR(20) DEFAULT NULL,\
// homephone VARCHAR(50) DEFAULT NULL,\
// cellphone VARCHAR(50) DEFAULT NULL,\