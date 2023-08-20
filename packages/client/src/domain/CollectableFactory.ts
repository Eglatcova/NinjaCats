import Collectable from './Collectable'
import {
  AnimateStrategy,
  FreeFallStrategy,
  SoaringStrategy,
} from './AnimateStrategy'
import { BlueStrategy, FuchsiaStrategy, RenderStrategy } from './RenderStrategy'
import { Command } from './EffectCommands'

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
  public createRandomCollectable() {
    return new Collectable(
      this.getRandom(0, 750),
      0,
      50,
      50,
      this.getRandomAnimateStrategy(),
      this.getRandomRenderStrategy(),
      this.getRandomCommand()
    )
  }
}
