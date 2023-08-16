import Canvas from './Canvas'

export default class Basket {
  private x = 0
  private velocity = 0.4
  private direction = 0
  public draw(g: Canvas) {
    g.drawRect(this.x, 550, 100, 50, '#EE6730')
  }

  public setDirection(direction: -1 | 0 | 1) {
    this.direction = direction
  }

  public animate(dt: number) {
    this.x = this.x + this.direction * this.velocity * dt
  }
}
