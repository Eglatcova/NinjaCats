import type { NextFunction, Request, Response } from 'express'

export interface IUser {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      user: IUser
    }
  }
}

export default function () {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = JSON.parse(req.cookies['userData'] ?? 'null')
    if (user === null && req.originalUrl !== '/login') {
      res.redirect('/login')
      return
    }

    req.user = user

    next()
  }
}
