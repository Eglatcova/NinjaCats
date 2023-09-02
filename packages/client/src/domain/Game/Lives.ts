import canvas from './Canvas'
import Settings from './Settings'

export default class Lives {
  private lives = 3
  private x: number
  private y = 10
  private width = 20
  private height = 20

  constructor() {
    this.x = Settings.getInstance().getSize().width
  }

  public render(g: canvas) {
    for (let i = 1; i <= this.lives; i++) {
      g.drawRect(
        this.x - i * (this.width + 10),
        this.y,
        this.width,
        this.height,
        '#EE672F'
      )
    }
  }

  public decreaseLives() {
    if (this.lives - 1 >= 0) {
      this.lives -= 1
    }
  }

  public isAlive() {
    return this.lives > 0
  }
}
