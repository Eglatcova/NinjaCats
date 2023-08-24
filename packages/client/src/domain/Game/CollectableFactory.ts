import Collectable from './Collectable'
import {
  AnimateStrategy,
  FreeFallStrategy,
  SoaringFallStrategy,
} from './AnimateStrategy'
import { BlueStrategy, FuchsiaStrategy, RenderStrategy } from './RenderStrategy'
import { Command } from './EffectCommands'
import Settings from './Settings'

export default class CollectableFactory {
  private availableAnimateStrategies: AnimateStrategy[] = [
    new FreeFallStrategy(),
    new SoaringFallStrategy(),
  ]
  private availableRenderStrategies: RenderStrategy[] = [
    new FuchsiaStrategy(),
    new BlueStrategy(),
  ]

  constructor(private availableCommands: Command[]) {}

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

  private getRandomCommand() {
    const randomIndex = this.getRandomIndex(
      0,
      this.availableAnimateStrategies.length - 1
    )
    return this.availableCommands[randomIndex]
  }

  private getRandomX() {
    const { width } = Settings.getInstance().getSize()
    return this.getRandom(0, width - 50)
  }

  public createRandomCollectable() {
    return new Collectable(
      this.getRandomX(),
      0,
      50,
      50,
      this.getRandom(0.1, 0.2),
      this.getRandomAnimateStrategy(),
      this.getRandomRenderStrategy(),
      this.getRandomCommand()
    )
  }
}
