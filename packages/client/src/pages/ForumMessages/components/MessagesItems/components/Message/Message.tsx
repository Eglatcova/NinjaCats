import { formatDate } from '../../../../../../utils/formatDate'
import classes from './Message.module.scss'

type MessageProps = {
  userName: string
  createdAt: string
  text: string
}

const Message: React.FC<MessageProps> = function (props) {
  const { userName, createdAt, text } = props

  return (
    <div className={classes.message}>
      <div className={classes.messageHeader}>
        <div>{userName}</div>
        <div>{formatDate(createdAt)}</div>
      </div>
      <div className={classes.messageText}>{text}</div>
    </div>
  )
}

export { Message }
