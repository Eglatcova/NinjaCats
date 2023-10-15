import { ChangeEventHandler, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Wrapper } from '../../components/Wrapper'
import { MessagesItems } from './components/MessagesItems'
import { ReactComponent as ReturnIcon } from '../../icons/return.svg'

import classes from './ForumMessages.module.scss'
import {
  IFormData,
  IMessage,
  forumController,
} from '../../controllers/ForumController'
import { useAppSelector } from '../../store/hooks'

const ForumMessages: React.FC = () => {
  const user = useAppSelector(state => state.user)
  const { id = '' } = useParams()

  const [currentTopic, setTopic] = useState<IFormData | null>(null)

  const [currentMessages, setCurrentMessages] = useState<IMessage[]>([])
  const [value, setValue] = useState('')

  useEffect(() => {
    forumController.getForumTopic(Number(id)).then(res => {
      const topic = res.topic
      setTopic(topic)
      setCurrentMessages(topic.Messages)
    })
  }, [id])

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setValue(target.value)
  }

  const sendMessage = () => {
    if (user) {
      forumController
        .sendMessage({ userName: user.login, text: value, TopicId: id })
        .then(res => {
          const topic = res.topic
          setTopic(topic)
          setCurrentMessages(topic.Messages)
          setValue('')
        })
    }
  }

  if (!currentTopic) {
    return (
      <Wrapper>
        <div className={classes.header}>
          <Link to={'/forum'}>
            <Button theme="primary">
              <ReturnIcon />
            </Button>
          </Link>
          Нет такой темы для обсуждения
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className={classes.header}>
        <Link to={'/forum'}>
          <Button theme="primary">
            <ReturnIcon />
          </Button>
        </Link>
        <h2 className={classes.title}>{currentTopic.label}</h2>
      </div>

      <MessagesItems messages={currentMessages} />

      <div className={classes.addBlock}>
        <Textarea
          className={classes.textarea}
          value={value}
          onChange={onChange}
        />
        <Button onClick={sendMessage} disabled={value === '' || !user}>
          Отправить
        </Button>
      </div>
    </Wrapper>
  )
}

export { ForumMessages }
