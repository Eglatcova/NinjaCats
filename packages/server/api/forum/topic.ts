import express, { type Request, type Response, Router } from 'express'
import { sanitize, sanitizerErrorHandler } from '../../middlewares/sanitizer'
import { Topic } from '../../db'
import { checkAuth } from '../../middlewares/checkAuth'
import { Message } from '../../db'
import { Sequelize } from 'sequelize-typescript'

export const topicRoute = Router()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(checkAuth)

  .get('/', (_, res: Response) => {
    Topic.findAll({
      order: [[Sequelize.col('createdAt'), 'ASC']],
      include: {
        model: Message,
        limit: 1,
        order: [[Sequelize.col('createdAt'), 'DESC']],
      },
    })
      .then(topics => res.status(200).json(topics))
      .catch(() => res.status(500).json({ reason: 'Error' }))
  })

  .get('/:id', (req, res) => {
    const { id } = req.params
    Topic.findOne({
      where: { id },
      include: Message,
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
