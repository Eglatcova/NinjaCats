import Canvas from './Canvas'
import Catcher from './Catcher'
import Keyboard from './Keyboard'
import CollisionEngine from './CollisionEngine'
import BoxCollider from './BoxCollider'
import {
  increaseVelocityCommand,
  noEffectCommand,
  reverseDirectionCommand,
} from './EffectCommands'
import Collectables from './Collectables'
import Settings from './Settings'
import { Score } from './Score'

class GameEngine {
  private g: Canvas
  private catcher: Catcher
  private collectables: Collectables
  private keyboard: Keyboard
  private collisionEngine: CollisionEngine
  private score: Score

  constructor(gameDiv: HTMLDivElement) {
    Settings.getInstance().setSize(800, 600)
    this.g = new Canvas(gameDiv)
    this.collisionEngine = new CollisionEngine()
    this.catcher = new Catcher()
    this.keyboard = new Keyboard()
    this.collectables = new Collectables(this.createCommands())
    this.score = new Score()
    this.initCollisions()
    this.render()
    this.loop(performance.now())
  }

  private createCommands() {
    return [
      new increaseVelocityCommand(this.catcher),
      new reverseDirectionCommand(this.catcher),
      new noEffectCommand(),
    ]
  }

  private initCollisions() {
    this.collisionEngine.addToLayer(
      this.catcher,
      CollisionEngine.LAYERS.CATCHER
    )
    const { width, height } = Settings.getInstance().getSize()
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
    this.collectables.render(this.g)
    this.catcher.render(this.g)
    this.score.render(this.g)
  }

  private drawBackground(g: Canvas) {
    const { width, height } = Settings.getInstance().getSize()
    g.drawRect(0, 0, width, height, '#4DC9FF')
  }

  private handleInput() {
    if (this.keyboard.isPressed(Keyboard.KEYS.LEFT)) {
      this.catcher.setDirection(-1)
      return
    }
    if (this.keyboard.isPressed(Keyboard.KEYS.RIGHT)) {
      this.catcher.setDirection(1)
      return
    }
    this.catcher.setDirection(0)
  }

  private animate(delay: number) {
    this.catcher.animate(delay, this.collisionEngine)
    this.collectables.animate(delay, this.collisionEngine)
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
