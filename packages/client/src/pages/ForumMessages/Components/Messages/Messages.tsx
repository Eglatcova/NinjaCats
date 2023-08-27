import { getDateString } from '../../../../utils/getDateString'
import { Message } from '../../../Forum/types'
import classes from './Messages.module.scss'

type MessagesProps = {
  messages: Message[]
}

const Messages: React.FC<MessagesProps> = function ({ messages }) {
  if (messages.length === 0) {
    return <div className={classes.emptyBlock}>Сообщений нет</div>
  }

  const messagesItems = messages.map(message => {
    const { id, timestamp, author, text } = message

    return (
      <div key={id} className={classes.message} id={id}>
        <div className={classes.messageHeader}>
          <div>{author}</div>
          <div>{getDateString(timestamp)}</div>
        </div>
        <div className={classes.messageText}>{text}</div>
      </div>
    )
  })

  return <>{messagesItems}</>
}

export { Messages }
