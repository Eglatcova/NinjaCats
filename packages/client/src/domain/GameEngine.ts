import Canvas from './Canvas'
import Basket from './Basket'
import Keyboard from './Keyboard'

class GameEngine {
  private g: Canvas
  private basket: Basket
  private keyboard: Keyboard

  constructor(gameDiv: HTMLDivElement) {
    this.g = new Canvas(gameDiv)
    this.basket = new Basket()
    this.keyboard = new Keyboard()
    this.draw()
    this.animate(performance.now())
  }

  private draw() {
    this.drawBackground(this.g)
    this.basket.draw(this.g)
  }

  private drawBackground(g: Canvas) {
    const { width, height } = this.g.getSizes()
    g.drawRect(0, 0, width, height, '#4DC9FF')
  }

  private moveBasket() {
    if (this.keyboard.isPressed(Keyboard.KEYS.LEFT)) {
      this.basket.setDirection(-1)
      return
    }
    if (this.keyboard.isPressed(Keyboard.KEYS.RIGHT)) {
      this.basket.setDirection(1)
      return
    }
    this.basket.setDirection(0)
  }

  private animate(last: number) {
    const now = performance.now()
    const delay = now - last
    this.g.clear()
    this.basket.animate(delay)
    this.moveBasket()
    this.draw()
    window.requestAnimationFrame(() => this.animate(now))
  }
}

export default GameEngine
