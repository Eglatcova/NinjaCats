import Canvas from './Canvas'
import { AnimateStrategy } from './AnimateStrategy'
import { RenderStrategy } from './RenderStrategy'
import { CollectionObject } from './interfaces'

export default class Collectable implements CollectionObject {
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number,
    private animateStrategy: AnimateStrategy,
    private renderStrategy: RenderStrategy
  ) {}

  public render(g: Canvas) {
    this.renderStrategy.render(g, this.x, this.y, this.width, this.height)
  }

  public animate(dt: number) {
    const { newX, newY } = this.animateStrategy.animate(this.x, this.y, dt)
    this.y = newY
    this.x = newX
  }

  public getParams() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    }
  }
}
