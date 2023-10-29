import type { RequestHandler } from 'express'
import fetch from 'cross-fetch'

export const checkAuth: RequestHandler = async (req, res, next) => {
  if (req.headers.cookie) {
    fetch('https://ya-praktikum.tech/api/v2/auth/user', {
      headers: {
        Cookie: req.headers.cookie,
      },
    })
      .then(res => {
        if (res.ok) {
          next()
        } else {
          throw new Error(res.statusText)
        }
      })
      .catch(error => {
        res.status(403).json({ reason: error })
      })
  } else {
    res.status(401).json({ reason: 'Unauthorized' })
  }
}
