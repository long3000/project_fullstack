const session = require('express-session');

const sessionSettings = session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
});

export.sessionSettings = sessionSettings;