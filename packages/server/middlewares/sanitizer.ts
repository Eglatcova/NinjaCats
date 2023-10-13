import { body, validationResult } from 'express-validator'
import type { NextFunction, Request, Response } from 'express'

export const sanitize = () => body('*').escape()

export const sanitizerErrorHandler = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    next()
  } else {
    next(Error('Запрос содержит вредоносный код'))
  }
}
