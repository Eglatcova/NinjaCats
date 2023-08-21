import cn from 'classnames'
import classes from './Input.module.scss'
import { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { className, ...inputProps } = props

    const inputClasses = cn(classes.input, className)

    return <input className={inputClasses} ref={ref} {...inputProps} />
  }
)

export { Input }
