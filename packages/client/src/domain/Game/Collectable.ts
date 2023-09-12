import Canvas from './Canvas'
import { AnimateStrategy } from './AnimateStrategy'
import { RenderStrategy } from './RenderStrategy'
import { Command } from './EffectCommands'

export default class Collectable {
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number,
    private velocity: number,
    private animateStrategy: AnimateStrategy,
    private renderStrategy: RenderStrategy,
    private catcherCollisionEffect: Command,
    private bottomBoundCollisionEffect: Command,
    private text: string
  ) {}

  public render(g: Canvas) {
    this.renderStrategy.render(
      g,
      this.x,
      this.y,
      this.width,
      this.height,
      this.text
    )
  }

  public animate(dt: number) {
    const { newX, newY } = this.animateStrategy.animate(
      this.x,
      this.y,
      this.velocity,
      dt
    )
    this.y = newY
    this.x = newX
  }

  public touchCatcher() {
    this.catcherCollisionEffect.execute()
    setTimeout(() => this.catcherCollisionEffect.unexecute(), 2000)
  }

  public touchBottomBound() {
    this.bottomBoundCollisionEffect.execute()
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
