const fetch = require('node-fetch');

const URL = 'https://api.randomuser.me';

function FetchProfile() {
    return fetch(URL)
            .then( data => data.json())
            .then( resp => {
                return resp.results;
            })
            .catch(error => console.log(error));
}

function logErrors(err, req, res, next) {
    console.error(err.stack)
    next(err)
}


module.exports.FetchProfile = FetchProfile;

// FetchProfile();