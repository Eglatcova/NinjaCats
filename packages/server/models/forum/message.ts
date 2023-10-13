import { DataType, Model } from 'sequelize-typescript'
import type { ModelAttributes } from 'sequelize/types'

interface Message {
  userName: string
  text: string
}

const MessageModel: ModelAttributes<Model, Message> = {
  text: {
    type: DataType.STRING,
    allowNull: false,
  },
  userName: {
    type: DataType.STRING,
    allowNull: false,
  },
}

export { Message, MessageModel }
