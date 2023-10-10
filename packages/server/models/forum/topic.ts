import { DataType, Model } from 'sequelize-typescript'
import type { ModelAttributes } from 'sequelize/types'

export interface Topic {
  label: string
  lastMessage?: string
}

export const TopicModel: ModelAttributes<Model, Topic> = {
  label: {
    type: DataType.STRING,
    allowNull: false,
  },
}
