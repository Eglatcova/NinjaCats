import { Link } from 'react-router-dom'
import classes from './Topic.module.scss'
import { getDateString } from '../../../../utils/getDateString'

type TopicProps = {
  id: string
  label: string
  messagesNumber: number
  author: string
  timestamp: number
}

const Topic: React.FC<TopicProps> = props => {
  const { id, label, messagesNumber, author, timestamp } = props

  return (
    <Link to={`/forum/${id}`} key={id} className={classes.topic}>
      <div className={classes.label}>{label}</div>
      <div className={classes.messagesNumber}>{messagesNumber}</div>
      <div className={classes.messageInfo}>
        <span>{author}</span>
        <span className={classes.timestamp}>{getDateString(timestamp)}</span>
      </div>
    </Link>
  )
}

export { Topic }
