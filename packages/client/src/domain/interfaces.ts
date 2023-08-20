import Canvas from './Canvas'

export interface Collider {
  getParams: () => {
    x: number
    y: number
    width: number
    height: number
  }
}

export interface CollectionObject extends Collider {
  render: (g: Canvas) => void
  animate: (dt: number) => void
  touchBasket: () => void
}
