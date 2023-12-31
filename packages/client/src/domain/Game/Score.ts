import canvas from './Canvas'

export default class Score {
  private score = 0
  private x = 10
  private y = 50
  private fontSize = 48

  public render(g: canvas) {
    g.drawText(this.x, this.y, `Score: ${this.score}`, this.fontSize, '#EE672F')
  }

  public increaseScore(s: number) {
    if (this.score + s < 0) {
      this.score = 0
      return
    }
    this.score += s
  }

  public getScore() {
    return this.score
  }
}
