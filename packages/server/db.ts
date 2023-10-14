import { MessageModel } from './models/forum/message'
import { TopicModel } from './models/forum/topic'
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import dotenv from 'dotenv'
import * as path from 'path'
import { ReactionModel } from './models/forum/reactions'
import { TopicReactionModel } from './models/forum/topic_reaction'

dotenv.config({ path: path.resolve('../../.env') })

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
export const Reaction = sequelize.define('Reaction', ReactionModel, {})
export const Topic_Reaction = sequelize.define(
  'topic_reactions',
  TopicReactionModel,
  {}
)

Topic.hasMany(Message)
Message.belongsTo(Topic)

Topic.belongsToMany(Reaction, { through: Topic_Reaction })
Reaction.belongsToMany(Topic, { through: Topic_Reaction })

export const dbConnect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    await sequelize.sync()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
