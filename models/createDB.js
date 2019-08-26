

const createDatabase = 
    "CREATE TABLE IF NOT EXISTS user_profiles (\
    id INT NOT NULL AUTO_INCREMENT,\
    uuid VARCHAR(255) NOT NULL, \
    gender VARCHAR(255) DEFAULT NULL, \
    firstname VARCHAR(255) NOT NULL,\
    lastname VARCHAR(255) NOT NULL,\
    title VARCHAR(20) DEFAULT NULL,\
    email VARCHAR(255) NOT NULL,\
    dob VARCHAR(255) NOT NULL,\
    age INT DEFAULT NULL,\
    picture VARCHAR(255) DEFAULT NULL,\
    PRIMARY KEY (id))";

const createDatabaseLocations = 
    "CREATE TABLE IF NOT EXISTS user_locations (\
    id INT NOT NULL AUTO_INCREMENT,\
    uuid VARCHAR(255) NOT NULL, \
    street VARCHAR(255) DEFAULT NULL, \
    city VARCHAR(255) NOT NULL,\
    state VARCHAR(255) NOT NULL,\
    postal VARCHAR(20) DEFAULT NULL,\
    country VARCHAR(20) DEFAULT NULL,\
    homephone VARCHAR(50) DEFAULT NULL,\
    cellphone VARCHAR(50) DEFAULT NULL,\
    PRIMARY KEY (id))";

const createUser = 
      "INSERT INTO user_profiles \
        SET uuid = ? \
            gender = ? \
            firstname = ? \
            lastname = ? \
            title = ? \
            email = ? \
            dob = ? \
      ";
const matchCountry = 
  "SELECT Name FROM data_csv WHERE Code = ? LIMIT 1";      

// Create Database for profiles
module.exports = {
  createDatabase,
  createDatabaseLocations,
  createUser, 
  matchCountry
};