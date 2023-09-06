import { ReactComponent as PixelPattent } from '../../icons/pixels.svg'

import classes from './Wrapper.module.scss'

type WrapperProps = {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <PixelPattent className={classes.pattern} />
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export { Wrapper }
