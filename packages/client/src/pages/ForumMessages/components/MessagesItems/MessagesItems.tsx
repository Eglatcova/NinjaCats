import { Message } from './components/Message'
import classes from './MessagesItems.module.scss'
import { IMessage } from '../../../../controllers/ForumController'

type MessagesProps = {
  messages: IMessage[]
}

const MessagesItems: React.FC<MessagesProps> = function ({ messages }) {
  if (messages.length === 0) {
    return <div className={classes.emptyBlock}>Сообщений нет</div>
  }

  return (
    <>
      {messages.map(message => {
        return <Message key={message.id} {...message} />
      })}
    </>
  )
}

export { MessagesItems }
