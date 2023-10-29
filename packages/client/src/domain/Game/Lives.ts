import canvas from './Canvas'
import Settings from './Settings'

export default class Lives {
  private lives = 3
  private x: number
  private y = 10
  private width = 35

  constructor() {
    this.x = Settings.getInstance().getSize().width
  }

  public render(g: canvas) {
    for (let i = 1; i <= this.lives; i++) {
      const GAP = 10
      const marginRight = i * this.width + (i - 1) * GAP
      const startXIndex = this.x - marginRight

      g.drawHeart(startXIndex, this.y, '#EE672F')
    }
  }

  public decreaseLives() {
    if (this.lives >= 1) {
      this.lives -= 1
    }
  }

  public isAlive() {
    return this.lives > 0
  }
}
