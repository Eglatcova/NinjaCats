import { ChangeEvent } from 'react'
import { Button } from '../../../../components/Button'
import classes from './CreationBlock.module.scss'
import { BaseInput } from '../../../../components/BaseInput'

type CreationBlockProps = {
  isCretionOn: boolean
  value: string
  onConfirmClick: () => void
  onCloseClick: () => void
  onStartClick: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CreationBlock: React.FC<CreationBlockProps> = function (props) {
  const {
    value,
    isCretionOn,
    onConfirmClick,
    onCloseClick,
    onStartClick,
    onChange,
  } = props

  if (isCretionOn) {
    const isConfirmButtonDisabled = value.length === 0

    return (
      <>
        <div className={classes.inputBlock}>
          <label htmlFor="creation">Введите название новой темы</label>
          <BaseInput id="creation" value={value} onChange={onChange} />
        </div>
        <div className={classes.controls}>
          <Button onClick={onConfirmClick} disabled={isConfirmButtonDisabled}>
            OK
          </Button>
          <Button onClick={onCloseClick}>Закрыть</Button>
        </div>
      </>
    )
  }

  return <Button onClick={onStartClick}>Создать тему</Button>
}

export { CreationBlock }
