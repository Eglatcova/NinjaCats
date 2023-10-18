import { DataType, Model } from 'sequelize-typescript'
import type { ModelAttributes } from 'sequelize/types'

export interface Reaction {
  name: string
}

export const ReactionModel: ModelAttributes<Model, Reaction> = {
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
}
