const fetch = require('node-fetch');

const URL = 'https://api.randomuser.me';

let user;

function FetchProfile() {
    fetch(URL)
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            let profile = data.results.map((info) => {
                console.log(`First Name: ${info.name.first}\nLast Name: ${info.name.last}\nTitle: ${info.name.title}`);
                console.log(`Email: ${info.email}`);
                console.log(`DOB: ${info.dob.date}\nAge: ${info.dob.age}`);
                console.log(`Username: ${info.login.username} \nPassword: ${info.login.password}\nUUID: ${info.login.uuid}`);
            })
        })
        .catch(error => console.log(error));
}

function logErrors(err, req, res, next) {
    console.error(err.stack)
    next(err)
}


module.exports.FetchProfile = FetchProfile;

// FetchProfile();