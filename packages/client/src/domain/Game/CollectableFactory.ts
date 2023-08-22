import Collectable from './Collectable'
import {
  AnimateStrategy,
  FreeFallStrategy,
  SoaringStrategy,
} from './AnimateStrategy'
import { BlueStrategy, FuchsiaStrategy, RenderStrategy } from './RenderStrategy'
import { Command } from './EffectCommands'
import Settings from './Settings'

export default class CollectableFactory {
  private availableAnimateStrategies: AnimateStrategy[] = [
    new FreeFallStrategy(),
    new SoaringStrategy(),
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
    return (
      this.availableAnimateStrategies.at(
        this.getRandomIndex(0, this.availableAnimateStrategies.length - 1)
      ) || new FreeFallStrategy()
    )
  }
  private getRandomRenderStrategy() {
    return (
      this.availableRenderStrategies.at(
        this.getRandomIndex(0, this.availableAnimateStrategies.length - 1)
      ) || new FuchsiaStrategy()
    )
  }

  private getRandomCommand() {
    return this.availableCommands.at(
      this.getRandomIndex(0, this.availableCommands.length - 1)
    )!
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
