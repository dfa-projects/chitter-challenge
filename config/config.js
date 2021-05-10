require('dotenv').config();

module.exports = {
  "development": {
    "username": `${process.env.DATABASE_USER}`,
    "password": `${process.env.DATABASE_PASSWORD}`,
    "database": `${process.env.DATABASE}_development`,
    "host": "127.0.0.1",
    "dialect": "postgres"//,
    // "dialectOptions": {
    //   useUTC: true, // for reading from database
    //   timezone: '+01:00'
    // }, // for writing to database
  },
  "test": {
    "username": `${process.env.DATABASE_USER}`,
    "password": `${process.env.DATABASE_PASSWORD}`,
    "database": `${process.env.DATABASE}_test`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
