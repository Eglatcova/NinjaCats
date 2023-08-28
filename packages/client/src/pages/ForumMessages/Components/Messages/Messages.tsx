import { Message } from './components/Message'

import type { Message as MessageType } from '../../../Forum/types'

import classes from './Messages.module.scss'

type MessagesProps = {
  messages: MessageType[]
}

const Messages: React.FC<MessagesProps> = function ({ messages }) {
  if (messages.length === 0) {
    return <div className={classes.emptyBlock}>Сообщений нет</div>
  }

  return (
    <>
      {messages.map(message => {
        return <Message {...message} />
      })}
    </>
  )
}

export { Messages }
