import express, { Router } from 'express'
import { sanitize, sanitizerErrorHandler } from '../../middlewares/sanitizer'
import { Message } from '../../db'
import { checkAuth } from '../../middlewares/checkAuth'

import type { Request, Response } from 'express'

export const messageRoute = Router()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(checkAuth)
  .post(
    '/',
    sanitize(),
    sanitizerErrorHandler,
    (req: Request, res: Response) => {
      Message.create(req.body)
        .then(() => res.status(200).json({}))
        .catch(() => res.status(500).json({ reason: 'Error' }))
    }
  )
