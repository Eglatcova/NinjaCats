import { forwardRef } from 'react'
import cn from 'classnames'
import classes from './Textarea.module.scss'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea: React.FC<TextareaProps> = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>((props, ref) => {
  const { className, ...textareaProps } = props

  const textareaClasses = cn(classes.textarea, className)

  return <textarea className={textareaClasses} ref={ref} {...textareaProps} />
})

export { Textarea }
