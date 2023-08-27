import { ChangeEventHandler, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Wrapper } from '../../components/Wrapper'
import { ReactComponent as ReturnIcon } from '../../icons/return.svg'
import { getDateString } from '../../utils/getDateString'
import { mockTopics } from '../Forum/mock'

import classes from './ForumMessages.module.scss'

const ForumMessages: React.FC = () => {
  const { id = '' } = useParams()

  const { label, messages = [] } = mockTopics[id]

  const [currentMeaasges, setCurrentMessages] = useState(messages)
  const [value, setValue] = useState('')

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setValue(target.value)
  }

  const sendMessage = () => {
    const newMessaege = {
      id: new Date().toString(),
      timestamp: Date.now(),
      author: 'My Name',
      text: value,
    }

    setCurrentMessages(prev => [...prev, newMessaege])
    setValue('')
  }

  const renderMessages = () => {
    if (currentMeaasges.length === 0) {
      return <div className={classes.emptyBlock}>Сообщений нет</div>
    }

    const messagesItems = currentMeaasges.map(message => {
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

    return messagesItems
  }

  return (
    <Wrapper>
      <div className={classes.header}>
        <Link to={'/forum'}>
          <Button theme="primary">
            <ReturnIcon />
          </Button>
        </Link>
        <h2 className={classes.title}>{label}</h2>
      </div>
      {renderMessages()}
      <div className={classes.addBlock}>
        <Textarea
          className={classes.textarea}
          value={value}
          onChange={onChange}
        />
        <Button onClick={sendMessage} disabled={value === ''}>
          Отправить
        </Button>
      </div>
    </Wrapper>
  )
}

export { ForumMessages }
