import Canvas from './Canvas'
import { Collider } from './interfaces'
import CollisionEngine from './CollisionEngine'
import BoxCollider from './BoxCollider'
import Settings from './Settings'

export default class Catcher implements Collider {
  private x
  private y
  private width = 100
  private height = 50
  private color = '#EE6730'
  private velocity = 0.4
  private direction = 0

  constructor() {
    const { width, height } = Settings.getInstance().getSize()
    this.x = width / 2 - this.width / 2
    this.y = height - this.height
  }

  public render(g: Canvas) {
    g.drawRect(this.x, this.y, this.width, this.height, this.color)
  }

  public setDirection(direction: -1 | 0 | 1) {
    this.direction = direction
  }

  public animate(dt: number, collision: CollisionEngine) {
    const nextX = this.x + this.direction * this.velocity * dt
    const box = new BoxCollider(nextX, this.y, this.width, this.height)
    const isBoxCollided = collision.checkSideBoundsCollision(box)
    if (!isBoxCollided) {
      this.x = nextX
    }
  }

  public updateVelocity(velocity: number) {
    if (this.velocity > 0) {
      this.velocity = this.velocity + velocity
    } else {
      this.velocity = this.velocity - velocity
    }
  }

  public reverseDirection() {
    this.velocity *= -1
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
