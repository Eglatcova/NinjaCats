import { ChangeEventHandler, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Wrapper } from '../../components/Wrapper'
import { ReactComponent as ReturnIcon } from '../../icons/return.svg'
import { mockTopics } from '../Forum/mock'
import { Message } from './Components/Messages'

import classes from './ForumMessages.module.scss'

const ForumMessages: React.FC = () => {
  const { id = '' } = useParams()

  const { label, messages = [] } = mockTopics[id]

  const [currentMessages, setCurrentMessages] = useState(messages)
  const [value, setValue] = useState('')

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setValue(target.value)
  }

  const sendMessage = () => {
    const newMessage = {
      id: new Date().toString(),
      timestamp: Date.now(),
      author: 'My Name',
      text: value,
    }

    setCurrentMessages(prev => [...prev, newMessage])
    setValue('')
  }

  const renderMessages = () => {
    if (currentMessages.length === 0) {
      return <div className={classes.emptyBlock}>Сообщений нет</div>
    }

    return currentMessages.map(message => {
      const { id, timestamp, author, text } = message
      return (
        <Message id={id} timestamp={timestamp} author={author} text={text} />
      )
    })
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
