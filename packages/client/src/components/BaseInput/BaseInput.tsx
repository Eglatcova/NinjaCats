import cn from 'classnames'
import { forwardRef } from 'react'

import classes from './BaseInput.module.scss'

type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>

const BaseInput: React.FC<BaseInputProps> = forwardRef<
  HTMLInputElement,
  BaseInputProps
>((props, ref) => {
  const { className, ...inputProps } = props

  const inputClasses = cn(classes.input, className)

  return <input className={inputClasses} ref={ref} {...inputProps} />
})

export { BaseInput }
