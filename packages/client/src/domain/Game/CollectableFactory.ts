import Collectable from './Collectable'
import {
  AnimateStrategy,
  FreeFallStrategy,
  SoaringFallStrategy,
} from './AnimateStrategy'
import { PositiveStrategy, NegativeStrategy } from './RenderStrategy'
import { Command } from './EffectCommands'
import Settings from './Settings'

type CollectableEffects = {
  positiveEffects: Command[]
  negativeEffects: Command[]
  emptyEffect: Command
  loseEffect: Command
}
export default class CollectableFactory {
  private legacyInFrontend: string[] = [
    'JQuery',
    'Karma',
    'IE11',
    'HTTP',
    '.ttf',
    'CSS2',
    'ES5',
    'JSlint',
    'CommJS',
    'Gulp',
  ]

  private actualInFrontend: string[] = [
    'React18',
    'zustand',
    'HTTPS',
    '.webp',
    'ES2023',
    'Vite',
    'ESLint',
    'yarn',
    'PWA',
  ]

  private availableAnimateStrategies: AnimateStrategy[] = [
    new FreeFallStrategy(),
    new SoaringFallStrategy(),
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

  private getRandomCommand(positive: boolean) {
    const randomIndex = this.getRandomIndex(
      0,
      this.availableAnimateStrategies.length - 1
    )
    const { positiveEffects, negativeEffects } = this.availableCommands
    return positive
      ? positiveEffects[randomIndex]
      : negativeEffects[randomIndex]
  }

  private getRandomX() {
    const { width } = Settings.getInstance().getSize()
    return this.getRandom(0, width - 150)
  }

  public createPositiveCollectable() {
    const index = this.getRandomIndex(0, this.actualInFrontend.length - 1)
    const text = this.actualInFrontend[index]

    return new Collectable(
      this.getRandomX(),
      0,
      100,
      50,
      this.getRandom(0.1, 0.2),
      this.getRandomAnimateStrategy(),
      new PositiveStrategy(),
      this.getRandomCommand(true),
      this.availableCommands.loseEffect,
      text
    )
  }

  public createNegativeCollectable() {
    const index = this.getRandomIndex(0, this.legacyInFrontend.length - 1)
    const text = this.legacyInFrontend[index]

    return new Collectable(
      this.getRandomX(),
      0,
      100,
      50,
      this.getRandom(0.1, 0.2),
      this.getRandomAnimateStrategy(),
      new NegativeStrategy(),
      this.getRandomCommand(false),
      this.availableCommands.emptyEffect,
      text
    )
  }

  public createRandomCollectable() {
    return Math.random() > 0.5
      ? this.createNegativeCollectable()
      : this.createPositiveCollectable()
  }
}
