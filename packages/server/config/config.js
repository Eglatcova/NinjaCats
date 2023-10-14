const path = require('path')
require('dotenv').config({path: path.resolve('./.env')})
const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
} = process.env


const config = {
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
}

console.log(config)

module.exports = {
  "development": { ...config, host: 'localhost' },
  "production": config
}