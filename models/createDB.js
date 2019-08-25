

const createDatabase = "CREATE TABLE IF NOT EXISTS user_profiles (\
    uuid VARCHAR(255) NOT NULL, \
    gender VARCHAR(255) DEFAULT NULL, \
    firstname VARCHAR(255) NOT NULL,\
    lastname VARCHAR(255) NOT NULL,\
    title VARCHAR(20) DEFAULT NULL,\
    email VARCHAR(255) NOT NULL,\
    dob DATE NOT NULL,\
    age INT DEFAULT NULL,\
    PRIMARY KEY(uuid))";

// Create Database for profiles
module.exports = {
  createDatabase  
};