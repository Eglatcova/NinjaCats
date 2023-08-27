import React, { ChangeEventHandler, useState } from 'react'
import { Wrapper } from '../../components/Wrapper'
import { Topic } from './components/Topic'
import { mockTopics } from './mock'

import classes from './Forum.module.scss'
import { CreationBlock } from './components/CreationBlock/CreationBlock'

const plugTopic = {
  timestamp: null,
  author: '-',
}

const Forum: React.FC = function () {
  const [currentTopics, setTopics] = useState(mockTopics)
  const [isCretionOn, setCreationState] = useState(false)
  const [newTopicLabel, setNewTopicLabel] = useState('')

  const onChangeTopicValue: ChangeEventHandler<HTMLInputElement> = event => {
    const { target } = event
    setNewTopicLabel(target.value)
  }

  const onTopicCreation = () => setCreationState(true)
  const offTopicCreation = () => setCreationState(false)

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

  const topics = Object.values(currentTopics).map(topic => {
    const { id, label, messages } = topic
    const lastTopic = messages[messages.length - 1]
    const { timestamp, author } = lastTopic || plugTopic

    return (
      <Topic
        id={id}
        label={label}
        messagesNumber={messages.length}
        author={author}
        timestamp={timestamp}
      />
    )
  })

  return (
    <Wrapper>
      <div className={classes.creationBlock}>
        <CreationBlock
          value={newTopicLabel}
          isCretionOn={isCretionOn}
          onChange={onChangeTopicValue}
          onConfirmClick={createNewTopic}
          onCloseClick={offTopicCreation}
          onStartClick={onTopicCreation}
        />
      </div>
      <div className={classes.topics}>
        <div className={classes.topicsHeader}>
          <div className={classes.topicsHeaderColumn}>Название темы</div>
          <div className={classes.topicsHeaderColumn}>Кол-во сообщений</div>
          <div className={classes.topicsHeaderColumn}>Последнее сообщение</div>
        </div>
        {topics}
      </div>
    </Wrapper>
  )
}

export { Forum }
