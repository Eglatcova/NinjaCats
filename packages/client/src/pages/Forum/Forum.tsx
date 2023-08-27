import React, { ChangeEventHandler, useState } from 'react'
import { Wrapper } from '../../components/Wrapper'
import { CreationBlock } from './components/CreationBlock/CreationBlock'
import { Topics } from './components/Topics'
import { mockTopics } from './mock'

import classes from './Forum.module.scss'

const Forum: React.FC = function () {
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

  return (
    <Wrapper>
      <CreationBlock
        value={newTopicLabel}
        isCretionOn={isTopicCretionOn}
        onChange={onChangeTopicValue}
        onConfirm={createNewTopic}
        onClose={offTopicCreation}
        onCreation={onTopicCreation}
      />
      <div className={classes.topics}>
        <div className={classes.topicsHeader}>
          <div className={classes.topicsHeaderColumn}>Название темы</div>
          <div className={classes.topicsHeaderColumn}>Кол-во сообщений</div>
          <div className={classes.topicsHeaderColumn}>Последнее сообщение</div>
        </div>
        <Topics topics={Object.values(currentTopics)} />
      </div>
    </Wrapper>
  )
}

export { Forum }
