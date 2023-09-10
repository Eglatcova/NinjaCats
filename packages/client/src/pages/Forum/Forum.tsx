import React, { ChangeEventHandler, useMemo, useState } from 'react'
import { Wrapper } from '../../components/Wrapper'
import { CreationBlockContent } from './components/CreationBlockContent'
import { Topic } from './components/Topic'
import { mockTopics } from './mock'
import { useAuth } from '../../hooks/useAuth'

import classes from './Forum.module.scss'

const plugTopic = {
  timestamp: null,
  author: '-',
}

const Forum: React.FC = function () {
  const [checkAuth] = useAuth()
  checkAuth('private')

  const [currentTopics, setTopics] = useState(mockTopics)
  const [isTopicCretionOn, setTopicCreationState] = useState(false)
  const [newTopicLabel, setNewTopicLabel] = useState('')

  const onChangeTopicValue: ChangeEventHandler<HTMLInputElement> = event => {
    const { target } = event
    setNewTopicLabel(target.value)
  }

  const onTopicCreation = () => setTopicCreationState(true)
  const offTopicCreation = () => setTopicCreationState(false)

  const createNewTopic = () => {
    const newTopic = {
      [Date.now().toString()]: {
        id: Date.now().toString(),
        label: newTopicLabel,
        messages: [],
      },
    }

    setTopics(prev => ({ ...prev, ...newTopic }))
    setNewTopicLabel('')
    offTopicCreation()
  }

  const topicItems = useMemo(
    () =>
      Object.values(currentTopics).map(topic => {
        const { id, label, messages } = topic
        const lastTopic = messages[messages.length - 1]
        const { timestamp, author } = lastTopic || plugTopic

        return (
          <Topic
            id={id}
            label={label}
            timestamp={timestamp}
            author={author}
            messagesNumber={messages.length}
          />
        )
      }),
    [currentTopics]
  )

  return (
    <Wrapper>
      <div className={classes.creationBlock}>
        <CreationBlockContent
          value={newTopicLabel}
          isCreationOn={isTopicCretionOn}
          onChange={onChangeTopicValue}
          onConfirm={createNewTopic}
          onClose={offTopicCreation}
          onCreation={onTopicCreation}
        />
      </div>
      <div className={classes.topics}>
        <div className={classes.topicsHeader}>
          <div className={classes.topicsHeaderColumn}>Название темы</div>
          <div className={classes.topicsHeaderColumn}>Кол-во сообщений</div>
          <div className={classes.topicsHeaderColumn}>Последнее сообщение</div>
        </div>
        {topicItems}
      </div>
    </Wrapper>
  )
}

export { Forum }
