import express, { Router } from 'express'
import { sanitize, sanitizerErrorHandler } from '../../middlewares/sanitizer'
import { Reaction, Topic, Topic_Reaction } from '../../db'
import { checkAuth } from '../../middlewares/checkAuth'
import { Message } from '../../db'
import { Model, Sequelize } from 'sequelize-typescript'

import type { Request, Response } from 'express'

export const topicRoute = Router()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(checkAuth)

  .get('/', (_, res: Response) => {
    Topic.findAll({
      order: [[Sequelize.col('createdAt'), 'ASC']],
      include: [
        {
          model: Message,
          limit: 1,
          order: [[Sequelize.col('createdAt'), 'DESC']],
        },
        {
          model: Reaction,
          through: {
            attributes: ['count'],
          },
        },
      ],
    })
      .then(topics => res.status(200).json(topics))
      .catch(() => res.status(500).json({ reason: 'Error' }))
  })

  .get('/:id', (req, res) => {
    const { id } = req.params
    Topic.findOne({
      where: { id },
      include: [
        Message,
        {
          model: Reaction,
          through: {
            attributes: ['count'],
          },
        },
      ],
    })
      .then(topic => res.status(200).json({ topic }))
      .catch(() => res.status(500).json({ reason: 'Error' }))
  })

  .post(
    '/',
    sanitize(),
    sanitizerErrorHandler,
    (req: Request, res: Response) => {
      Topic.create(req.body)
        .then(topic => res.status(200).send({ id: topic.id }))
        .catch(() => res.status(500).json({ reason: 'Error' }))
    }
  )

  .post(
    '/:id/reaction',
    sanitize(),
    sanitizerErrorHandler,
    async (req: Request, res: Response) => {
      const { id } = req.params
      const { reaction } = req.body

      const r = await Reaction.findOne({
        where: { name: reaction },
      })
      if (r === null) {
        return res.status(400).json({ error: 'Wrong Reaction' })
      }

      const tr: Model<any, any> | null = await Topic_Reaction.findOne({
        where: { TopicId: id, ReactionId: r.id },
      })
      if (tr === null) {
        const tr = await Topic_Reaction.create({
          TopicId: id,
          ReactionId: r.id,
          count: 1,
        })
        return res.status(200).json(tr)
      }

      await tr.update({ count: tr.toJSON().count + 1 })
      return res.status(200).json(tr)
    }
  )
