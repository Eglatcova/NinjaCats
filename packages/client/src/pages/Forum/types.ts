export type MessageType = {
  id: string
  timestamp: number
  author: string
  text: string
}

export type Topic = {
  id: string
  label: string
  messages: MessageType[]
}

export type TopicsHash = Record<string, Topic>
