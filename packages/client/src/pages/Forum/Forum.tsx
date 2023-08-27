import React, { ChangeEventHandler, useState } from 'react'
import { Button } from '../../components/Button'
import { BaseInput } from '../../components/BaseInput'
import { Wrapper } from '../../components/Wrapper'
import { Topic } from './components/Topic'
import { mockTopics } from './mock'

import classes from './Forum.module.scss'

const Forum: React.FC = function () {
  const [currentTopics, setTopics] = useState(mockTopics)
  const [isOpen, setIsOpenState] = useState(false)
  const [value, setValue] = useState('')

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setValue(target.value)
  }

  const onCreationButtonClick = () => setIsOpenState(true)

  const closeOnChangeBlock = () => setIsOpenState(false)

  const createNewTopic = () => {
    const newTopic = {
      [Date.now().toString()]: {
        id: Date.now().toString(),
        label: value,
        messages: [],
      },
    }

    setTopics(prev => ({ ...prev, ...newTopic }))
    setValue('')
    closeOnChangeBlock()
  }

  const renderCreationBlockContent = () => {
    if (isOpen) {
      const isConfirmButtonDisabled = value.length === 0
      return (
        <>
          <div className={classes.inputBlock}>
            <label htmlFor="creation">Введите название новой темы</label>
            <BaseInput id="creation" value={value} onChange={onChange} />
          </div>
          <div className={classes.controls}>
            <Button onClick={createNewTopic} disabled={isConfirmButtonDisabled}>
              OK
            </Button>
            <Button onClick={closeOnChangeBlock}>Закрыть</Button>
          </div>
        </>
      )
    }

    return <Button onClick={onCreationButtonClick}>Создать тему</Button>
  }

  const topics = Object.values(currentTopics).map(topic => {
    const { id, label, messages } = topic

    const lastTopic = messages[messages.length - 1]
    const plugTopic = {
      timestamp: null,
      author: '-',
    }
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
        {renderCreationBlockContent()}
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
