import Canvas from './Canvas'
import { Collider } from './interfaces'
import CollisionEngine from './CollisionEngine'
import BoxCollider from './BoxCollider'

export default class Basket implements Collider {
  private x = 0
  private y = 550
  private width = 100
  private height = 50
  private color = '#EE6730'
  private velocity = 0.4
  private direction = 0

  public render(g: Canvas) {
    g.drawRect(this.x, this.y, this.width, this.height, this.color)
  }

  public setDirection(direction: -1 | 0 | 1) {
    this.direction = direction
  }

  public animate(dt: number, collision: CollisionEngine) {
    const nextX = this.x + this.direction * this.velocity * dt
    if (
      collision.checkSideBoundsCollision(
        new BoxCollider(nextX, this.y, this.width, this.height)
      )
    ) {
      return
    }
    this.x = nextX
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
