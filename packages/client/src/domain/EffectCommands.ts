import Basket from './Basket'

export interface Command {
  execute: () => void
  unexecute: () => void
}

export class increaseVelocityCommand implements Command {
  private velocity = 0.1
  constructor(private basket: Basket) {}

  public execute() {
    this.basket.updateVelocity(this.velocity)
  }
  public unexecute() {
    this.basket.updateVelocity(-this.velocity)
  }
}

export class reverseDirectionCommand implements Command {
  constructor(private basket: Basket) {}

  public execute() {
    this.basket.updateDirection(-1)
  }
  public unexecute() {
    this.basket.updateDirection(-1)
  }
}
