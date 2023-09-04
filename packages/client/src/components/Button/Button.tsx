import cn from 'classnames'
import classes from './Button.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: 'primary' | 'secondary' | 'text'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = props => {
  const {
    theme = 'primary',
    children,
    className,
    onClick,
    ...buttonProps
  } = props

  const buttonClasses = cn(classes.button, className, {
    [classes.buttonPrimary]: theme === 'primary',
    [classes.buttonSecondary]: theme === 'secondary',
  })

  return (
    <button className={buttonClasses} {...buttonProps} onClick={onClick}>
      {children}
    </button>
  )
}

export { Button }
