require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "Postgres",
    "database": "music_tour",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
