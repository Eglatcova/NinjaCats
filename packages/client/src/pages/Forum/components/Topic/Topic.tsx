import { Link } from 'react-router-dom'

import classes from './Topic.module.scss'
import { formatDate } from '../../../../utils/formatDate'

type TopicProps = {
  id: number
  label: string
  messagesNumber: number
  author: string
  timestamp: string | null
}

const Topic: React.FC<TopicProps> = props => {
  const { id, label, messagesNumber, author, timestamp } = props

  return (
    <Link to={`/forum/${id}`} className={classes.topic}>
      <div className={classes.label}>{label}</div>
      <div className={classes.messagesNumber}>{messagesNumber}</div>
      <div className={classes.messageInfo}>
        <span>{author}</span>
        <span className={classes.timestamp}>{formatDate(timestamp)}</span>
      </div>
    </Link>
  )
}

export { Topic }
