require('dotenv').config();

module.exports = {
  "development": {
    "username": `${process.env.DATABASE_USER}`,
    "password": `${process.env.DATABASE_PASSWORD}`,
    "database": `${process.env.DATABASE}_development`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": `${process.env.DATABASE_USER}`,
    "password": `${process.env.DATABASE_PASSWORD}`,
    "database": `${process.env.DATABASE}_test`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
