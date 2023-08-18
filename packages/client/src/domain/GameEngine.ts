import Canvas from './Canvas'
import Basket from './Basket'
import Keyboard from './Keyboard'
import CollisionEngine from './CollisionEngine'
import BoxCollider from './BoxCollider'

class GameEngine {
  private g: Canvas
  private basket: Basket
  private keyboard: Keyboard
  private collision: CollisionEngine

  constructor(gameDiv: HTMLDivElement) {
    this.g = new Canvas(gameDiv)
    this.collision = new CollisionEngine()
    this.basket = new Basket(this.collision)
    this.keyboard = new Keyboard()
    this.initCollisions()
    this.draw()
    this.animate(performance.now())
  }

  private initCollisions() {
    this.collision.addToLayer(this.basket, CollisionEngine.LAYERS.BASKET)
    const { x, y, width, height } = this.g.getParams()
    this.collision.addToLayer(
      new BoxCollider(width, 0, 0, height),
      CollisionEngine.LAYERS.SIDE_BOUNDS
    )
    this.collision.addToLayer(
      new BoxCollider(0, 0, 0, height),
      CollisionEngine.LAYERS.SIDE_BOUNDS
    )
    this.collision.addToLayer(
      new BoxCollider(0, height, width, 0),
      CollisionEngine.LAYERS.BOTTOM_BOUNDS
    )
  }

  private draw() {
    this.drawBackground(this.g)
    this.basket.draw(this.g)
  }

  private drawBackground(g: Canvas) {
    const { width, height } = this.g.getParams()
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
