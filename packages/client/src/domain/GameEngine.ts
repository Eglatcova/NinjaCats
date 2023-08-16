import Canvas from './Canvas'
import Basket from './Basket'

class GameEngine {
  private g: Canvas
  private basket: Basket

  constructor(gameDiv: HTMLDivElement) {
    this.g = new Canvas(gameDiv)
    this.basket = new Basket()
    this.draw()
    this.createKeyListeners()
    this.animate(performance.now())
  }

  // TODO move listeners to class Keyboard, check key press state
  private createKeyListeners() {
    window.addEventListener('keydown', e => {
      switch (e.key) {
        case 'd':
        case 'ArrowRight':
          this.basket.setDirection(1)
          break
        case 'a':
        case 'ArrowLeft':
          this.basket.setDirection(-1)
          break
        default:
          break
      }
    })
    window.addEventListener('keyup', () => {
      this.basket.setDirection(0)
    })
  }

  private draw() {
    this.drawBackground(this.g)
    this.basket.draw(this.g)
  }

  private drawBackground(g: Canvas) {
    g.drawRect(0, 0, 800, 600, '#4DC9FF')
  }

  private animate(last: number) {
    const now = performance.now()
    const delay = now - last
    this.g.clear()
    this.basket.animate(delay)
    this.draw()
    window.requestAnimationFrame(() => this.animate(now))
  }
}

export default GameEngine
