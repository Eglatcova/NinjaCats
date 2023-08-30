import Collectable from './Collectable'
import {
  AnimateStrategy,
  FreeFallStrategy,
  SoaringFallStrategy,
} from './AnimateStrategy'
import { BlueStrategy, FuchsiaStrategy, RenderStrategy } from './RenderStrategy'
import { Command } from './EffectCommands'
import Settings from './Settings'

type CollectableEffects = {
  positiveEffects: Command[]
  negativeEffects: Command[]
}
export default class CollectableFactory {
  private availableAnimateStrategies: AnimateStrategy[] = [
    new FreeFallStrategy(),
    new SoaringFallStrategy(),
  ]
  private availableRenderStrategies: RenderStrategy[] = [
    new FuchsiaStrategy(),
    new BlueStrategy(),
  ]

  constructor(private availableCommands: CollectableEffects) {}

  private getRandom(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  private getRandomIndex(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min)
  }

  private getRandomAnimateStrategy() {
    const randomIndex = this.getRandomIndex(
      0,
      this.availableAnimateStrategies.length - 1
    )
    const strategy = this.availableAnimateStrategies[randomIndex]
    return strategy || new FreeFallStrategy()
  }

  private getRandomRenderStrategy() {
    const randomIndex = this.getRandomIndex(
      0,
      this.availableAnimateStrategies.length - 1
    )
    const strategy = this.availableRenderStrategies[randomIndex]
    return strategy || new FuchsiaStrategy()
  }

  private getRandomCommand(positive: boolean) {
    const randomIndex = this.getRandomIndex(
      0,
      this.availableAnimateStrategies.length - 1
    )
    return positive
      ? this.availableCommands.positiveEffects[randomIndex]
      : this.availableCommands.negativeEffects[randomIndex]
  }

  private getRandomX() {
    const { width } = Settings.getInstance().getSize()
    return this.getRandom(0, width - 50)
  }

  public createPositiveCollectable() {
    return new Collectable(
      this.getRandomX(),
      0,
      50,
      50,
      this.getRandom(0.1, 0.2),
      this.getRandomAnimateStrategy(),
      new FuchsiaStrategy(),
      this.getRandomCommand(true)
    )
  }

  public createNegativeCollectable() {
    return new Collectable(
      this.getRandomX(),
      0,
      50,
      50,
      this.getRandom(0.1, 0.2),
      this.getRandomAnimateStrategy(),
      new BlueStrategy(),
      this.getRandomCommand(false)
    )
  }

  public createRandomCollectable() {
    return Math.random() > 0.5
      ? this.createNegativeCollectable()
      : this.createPositiveCollectable()
  }
}
