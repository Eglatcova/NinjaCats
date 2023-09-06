import { TopicsHash } from './types'

const mockTopics: TopicsHash = {
  topic1: {
    id: 'topic1',
    label: 'Название темы',
    messages: [
      {
        id: '1',
        timestamp: new Date().setDate(new Date().getDate() - 4),
        author: 'Пользователь2',
        text: 'text',
      },
      {
        id: '2',
        timestamp: new Date().setDate(new Date().getDate() - 3),
        author: 'Пользователь2',
        text: 'text',
      },
      {
        id: '3',
        timestamp: new Date().setDate(new Date().getDate() - 2),
        author: 'Пользователь2',
        text: 'text',
      },
      {
        id: '4',
        timestamp: new Date().setDate(new Date().getDate() - 1),
        author: 'Пользователь2',
        text: 'text',
      },
    ],
  },
  topic2: {
    id: 'topic2',
    label: 'Название темы',
    messages: [
      {
        id: '1',
        timestamp: new Date().setDate(new Date().getDate() - 2),
        author: 'Пользователь2',
        text: 'text',
      },
      {
        id: '2',
        timestamp: new Date().setDate(new Date().getDate() - 1),
        author: 'Пользователь2',
        text: 'text',
      },
    ],
  },
  topic3: {
    id: 'topic3',
    label: 'Название темы',
    messages: [],
  },
}

export { mockTopics }
