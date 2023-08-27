import { Link } from 'react-router-dom'
import { getDateString } from '../../../../utils/getDateString'
import { Topic } from '../../types'

import classes from './Topics.module.scss'

const plugTopic = {
  timestamp: null,
  author: '-',
}

type TopicProps = {
  topics: Topic[]
}

const Topics: React.FC<TopicProps> = ({ topics }) => {
  const topicItems = Object.values(topics).map(topic => {
    const { id, label, messages } = topic
    const lastTopic = messages[messages.length - 1]
    const { timestamp, author } = lastTopic || plugTopic

    return (
      <Link to={`/forum/${id}`} key={id} className={classes.topic}>
        <div className={classes.label}>{label}</div>
        <div className={classes.messagesNumber}>{messages.length}</div>
        <div className={classes.messageInfo}>
          <span>{author}</span>
          <span className={classes.timestamp}>{getDateString(timestamp)}</span>
        </div>
      </Link>
    )
  })

  return <>{topicItems}</>
}

export { Topics }
