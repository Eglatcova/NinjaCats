import { MessageModel } from './models/forum/message'
import { TopicModel } from './models/forum/topic'
import { Client } from 'pg'
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
} = process.env

const client = new Client({
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: Number(POSTGRES_PORT),
})

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
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

export const dbConnect = async (): Promise<Client | null> => {
  try {
    await client.connect()

    await sequelize.authenticate()
    await sequelize.sync()

    const res = await client.query('SELECT NOW()')
    console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now)
    client.end()

    return client
  } catch (e) {
    console.error(e)
  }

  return null
}
