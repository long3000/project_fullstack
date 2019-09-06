

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

const createDatabaseLogin =
    "CREATE TABLE IF NOT EXISTS user_logins (\
      id INT NOT NULL AUTO_INCREMENT,\
      uuid VARCHAR(255) NOT NULL, \
      username VARCHAR(50) NOT NULL, \
      password VARCHAR(255) NOT NULL, \
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

const findUser = 
  "SELECT a.uuid AS uuid,gender,firstname,lastname,title,\
  email,dob,picture,street,city,state,postal,country,\
  homephone,cellphone FROM user_profiles a LEFT JOIN user_locations b \
  ON a.uuid = b.uuid WHERE a.uuid =? GROUP BY 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";

const finderUserSecure = 
"SELECT a.uuid AS uuid,gender,firstname,lastname,title,\
  email,dob,picture,street,city,state,postal,country,\
  homephone,cellphone FROM user_profiles a LEFT JOIN user_locations b \
  ON a.uuid = b.uuid WHERE a.username = ? AND a.password = ?\
  GROUP BY 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";

// Create Database for profiles
module.exports = {
  createDatabase,
  createDatabaseLocations,
  createDatabaseLogin,
  createUser, 
  matchCountry,
  findUser,
  finderUserSecure
};