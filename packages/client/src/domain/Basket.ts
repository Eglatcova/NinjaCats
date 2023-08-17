import Canvas from './Canvas'

export default class Basket {
  private x = 0
  private y = 550
  private width = 100
  private height = 50
  private color = '#EE6730'
  private velocity = 0.4
  private direction = 0
  public draw(g: Canvas) {
    g.drawRect(this.x, this.y, this.width, this.height, this.color)
  }

  public setDirection(direction: -1 | 0 | 1) {
    this.direction = direction
  }

  public animate(dt: number) {
    this.x = this.x + this.direction * this.velocity * dt
  }
}
