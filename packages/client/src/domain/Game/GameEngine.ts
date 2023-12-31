import Canvas from './Canvas'
import Catcher from './Catcher'
import Keyboard from './Keyboard'
import CollisionEngine from './CollisionEngine'
import BoxCollider from './BoxCollider'
import {
  IncreaseScoreCommand,
  IncreaseVelocityCommand,
  LoseLiveCommand,
  MacroCommand,
  NoEffectCommand,
  ReverseDirectionCommand,
} from './EffectCommands'
import Collectables from './Collectables'
import Settings from './Settings'
import Score from './Score'
import Lives from './Lives'
import CollectableFactory from './CollectableFactory'
import windowsImage from '../../assets/windows.jpeg'

class GameEngine {
  private g: Canvas
  private catcher: Catcher
  private collectables: Collectables
  private keyboard: Keyboard
  private score: Score
  private lives: Lives
  private collisionEngine: CollisionEngine
  private isStarted = false

  constructor(
    gameDiv: HTMLDivElement,
    private endGameCallback: (score: number) => void
  ) {
    Settings.getInstance().setSize(800, 600)
    this.g = new Canvas(gameDiv)
    this.collisionEngine = new CollisionEngine()
    this.catcher = new Catcher()
    this.keyboard = new Keyboard()
    this.score = new Score()
    this.lives = new Lives()
    this.collectables = new Collectables(
      new CollectableFactory(this.createCommands())
    )
    this.initCollisions()
    this.render()
  }

  public gameStart() {
    if (!this.isStarted) {
      this.isStarted = true
      this.collectables.spawnCollectables()
      this.loop(performance.now())
    }
  }

  public retry() {
    this.isStarted = false

    this.catcher = new Catcher()
    this.collisionEngine = new CollisionEngine()

    this.score = new Score()
    this.lives = new Lives()

    this.collectables = new Collectables(
      new CollectableFactory(this.createCommands())
    )

    this.initCollisions()
    this.gameStart()
  }

  private createCommands() {
    return {
      positiveEffects: [
        new MacroCommand()
          .add(new IncreaseVelocityCommand(this.catcher, 0.1))
          .add(new IncreaseScoreCommand(this.score, 10)),
        new MacroCommand()
          .add(new NoEffectCommand())
          .add(new IncreaseScoreCommand(this.score, 10)),
      ],
      negativeEffects: [
        new MacroCommand()
          .add(new ReverseDirectionCommand(this.catcher))
          .add(new IncreaseScoreCommand(this.score, -10)),
        new MacroCommand()
          .add(new IncreaseVelocityCommand(this.catcher, -0.1))
          .add(new IncreaseScoreCommand(this.score, -10)),
      ],
      emptyEffect: new NoEffectCommand(),
      loseEffect: new LoseLiveCommand(this.lives),
    }
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
    this.lives.render(this.g)
  }

  private drawBackground(g: Canvas) {
    const { width, height } = Settings.getInstance().getSize()
    g.drawImage(0, 0, width, height, windowsImage)
    g.drawRect(0, 0, width, height, '#ffffff4D')
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
    if (!this.lives.isAlive()) {
      this.endGameCallback(this.score.getScore())
      return
    }
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
