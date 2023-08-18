import Canvas from './Canvas'
import Basket from './Basket'
import Keyboard from './Keyboard'
import CollisionEngine from './CollisionEngine'
import BoxCollider from './BoxCollider'
import CollectableFactory from './CollectableFactory'
import Collection from './Collection'
import Collectable from './Collectable'

class GameEngine {
  private g: Canvas
  private basket: Basket
  private keyboard: Keyboard
  private collisionEngine: CollisionEngine
  private collectableFactory: CollectableFactory
  private collectablesList: Collection<Collectable> = new Collection()

  constructor(gameDiv: HTMLDivElement) {
    this.g = new Canvas(gameDiv)
    this.collisionEngine = new CollisionEngine()
    this.basket = new Basket()
    this.keyboard = new Keyboard()
    this.initCollisions()
    this.render()
    this.loop(performance.now())

    this.collectableFactory = new CollectableFactory()
    setInterval(() => {
      this.collectablesList.add(
        this.collectableFactory.createRandomCollectable()
      )
    }, 2000)
  }

  private initCollisions() {
    this.collisionEngine.addToLayer(this.basket, CollisionEngine.LAYERS.BASKET)
    const { width, height } = this.g.getParams()
    this.collisionEngine.addToLayer(
      new BoxCollider(width, 0, 0, height),
      CollisionEngine.LAYERS.SIDE_BOUNDS
    )
    this.collisionEngine.addToLayer(
      new BoxCollider(0, 0, 0, height),
      CollisionEngine.LAYERS.SIDE_BOUNDS
    )
    this.collisionEngine.addToLayer(
      new BoxCollider(0, height, width, 0),
      CollisionEngine.LAYERS.BOTTOM_BOUNDS
    )
  }

  private render() {
    this.drawBackground(this.g)
    this.collectablesList.render(this.g)
    this.basket.render(this.g)
  }

  private drawBackground(g: Canvas) {
    const { width, height } = this.g.getParams()
    g.drawRect(0, 0, width, height, '#4DC9FF')
  }

  private handleInput() {
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

  private animate(delay: number) {
    this.basket.animate(delay, this.collisionEngine)
    this.collectablesList.animate(delay, this.collisionEngine)
  }

  private loop(last: number) {
    const now = performance.now()
    const delay = now - last
    this.g.clear()

    this.handleInput()
    this.animate(delay)
    this.render()

    window.requestAnimationFrame(() => this.loop(now))
  }
}

export default GameEngine
