import React, { ChangeEventHandler, useEffect, useMemo, useState } from 'react'
import { Wrapper } from '../../components/Wrapper'
import { CreationBlockContent } from './components/CreationBlockContent'
import { Topic } from './components/Topic'
import { useAuth } from '../../hooks/useAuth'

import classes from './Forum.module.scss'
import { IFormData, forumController } from '../../controllers/ForumController'

const plugTopic = {
  createdAt: null,
  userName: '-',
}

const Forum: React.FC = function () {
  const [checkAuth] = useAuth()
  checkAuth('private')

  const [currentTopics, setTopics] = useState<IFormData[]>([])
  const [isTopicCretionOn, setTopicCreationState] = useState(false)
  const [newTopicLabel, setNewTopicLabel] = useState('')

  useEffect(() => {
    forumController.getForumTopics().then(res => setTopics(res))
  }, [])

  const onChangeTopicValue: ChangeEventHandler<HTMLInputElement> = event => {
    const { target } = event
    setNewTopicLabel(target.value)
  }

  const onTopicCreation = () => setTopicCreationState(true)
  const offTopicCreation = () => setTopicCreationState(false)

  const createNewTopic = () => {
    forumController.saveForumTopic({ label: newTopicLabel }).then(res => {
      setTopics(res)
      setNewTopicLabel('')
      offTopicCreation()
    })
  }

  const topicItems = useMemo(
    () =>
      Object.values(currentTopics).map(topic => {
        const { id, label, Messages } = topic
        const lastTopic = Messages.length
          ? Messages[Messages.length - 1]
          : plugTopic
        const { createdAt, userName } = lastTopic

        return (
          <Topic
            key={id}
            id={id}
            label={label}
            timestamp={createdAt}
            author={userName}
            messagesNumber={Messages.length}
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
