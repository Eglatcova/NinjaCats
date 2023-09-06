export type Message = {
  id: string
  timestamp: number
  author: string
  text: string
}

export type Topic = {
  id: string
  label: string
  messages: Message[]
}

export type TopicsHash = Record<string, Topic>
