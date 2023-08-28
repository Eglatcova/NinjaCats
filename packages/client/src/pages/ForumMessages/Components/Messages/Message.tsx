import { getDateString } from '../../../../utils/getDateString'

import classes from './Message.module.scss'

type MessageProps = {
  id: string
  author: string
  timestamp: number
  text: string
}

const Message: React.FC<MessageProps> = function (props) {
  const { id, author, timestamp, text } = props

  return (
    <div key={id} className={classes.message} id={id}>
      <div className={classes.messageHeader}>
        <div>{author}</div>
        <div>{getDateString(timestamp)}</div>
      </div>
      <div className={classes.messageText}>{text}</div>
    </div>
  )
}

export { Message }
