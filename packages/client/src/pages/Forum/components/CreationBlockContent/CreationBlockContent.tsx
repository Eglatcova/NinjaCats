import { ChangeEvent } from 'react'
import { Button } from '../../../../components/Button'
import { BaseInput } from '../../../../components/BaseInput'

import classes from './CreationBlockContent.module.scss'

type CreationBlockProps = {
  isCreationOn: boolean
  value: string
  onConfirm: () => void
  onClose: () => void
  onCreation: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CreationBlockContent: React.FC<CreationBlockProps> = function (props) {
  const { value, isCreationOn, onConfirm, onClose, onCreation, onChange } =
    props

  if (isCreationOn) {
    const isConfirmButtonDisabled = value.length === 0

    return (
      <>
        <div className={classes.inputBlock}>
          <label htmlFor="creation">Введите название новой темы</label>
          <BaseInput id="creation" value={value} onChange={onChange} />
        </div>
        <div className={classes.controls}>
          <Button onClick={onConfirm} disabled={isConfirmButtonDisabled}>
            OK
          </Button>
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </>
    )
  }

  return <Button onClick={onCreation}>Создать тему</Button>
}

export { CreationBlockContent }
