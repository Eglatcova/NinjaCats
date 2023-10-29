import { Router } from 'express'
import { messageRoute } from './forum/message'
import { topicRoute } from './forum/topic'

export const api = Router()

api.use('/forum/topic', topicRoute)
api.use('/forum/message', messageRoute)
