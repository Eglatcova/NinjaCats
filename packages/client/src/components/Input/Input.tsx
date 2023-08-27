import cn from 'classnames'
import classes from './Input.module.scss'
import { forwardRef } from 'react'

type InputProps = {
  labelText?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { className, labelText, ...inputProps } = props

    const inputClasses = cn(classes.input, className)

    return (
      <div className={classes.inputContainer}>
        <label>{labelText}</label>
        <input className={inputClasses} ref={ref} {...inputProps} />
      </div>
    )
  }
)

export { Input }
