import Canvas from './Canvas'
import { AnimateStrategy } from './AnimateStrategy'
import { RenderStrategy } from './RenderStrategy'

export default class Collectable {
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
}
