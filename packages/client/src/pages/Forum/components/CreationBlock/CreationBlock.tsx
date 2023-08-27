import { ChangeEvent, useEffect } from 'react'
import { Button } from '../../../../components/Button'
import classes from './CreationBlock.module.scss'
import { BaseInput } from '../../../../components/BaseInput'

type CreationBlockProps = {
  isCretionOn: boolean
  value: string
  onConfirm: () => void
  onClose: () => void
  onCreation: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CreationBlock: React.FC<CreationBlockProps> = function (props) {
  const { value, isCretionOn, onConfirm, onClose, onCreation, onChange } = props

  const renderContent = () => {
    if (isCretionOn) {
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

  return <div className={classes.creationBlock}>{renderContent()}</div>
}

export { CreationBlock }
