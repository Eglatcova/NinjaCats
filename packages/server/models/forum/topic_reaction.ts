import { DataType, Model } from 'sequelize-typescript'
import type { ModelAttributes } from 'sequelize/types'

export interface TopicReaction {
  count: number
}

export const TopicReactionModel: ModelAttributes<Model, TopicReaction> = {
  count: {
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}
