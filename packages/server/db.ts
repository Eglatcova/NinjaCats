import { MessageModel } from './models/forum/message'
import { TopicModel } from './models/forum/topic'
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
} = process.env

const sequelizeOptions: SequelizeOptions = {
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
}

const sequelize = new Sequelize(sequelizeOptions)

export const Topic = sequelize.define('Topic', TopicModel, {})
export const Message = sequelize.define('Message', MessageModel, {})

Topic.hasMany(Message)
Message.belongsTo(Topic)

export const dbConnect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    await sequelize.sync()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  return null
}
