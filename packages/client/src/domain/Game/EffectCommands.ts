import Catcher from './Catcher'

export interface Command {
  execute: () => void
  unexecute: () => void
}

export class increaseVelocityCommand implements Command {
  private velocity = 0.1
  constructor(private catcher: Catcher) {}

  public execute() {
    this.catcher.updateVelocity(this.velocity)
  }
  public unexecute() {
    this.catcher.updateVelocity(-this.velocity)
  }
}

export class reverseDirectionCommand implements Command {
  constructor(private catcher: Catcher) {}

  public execute() {
    this.catcher.updateDirection(-1)
  }
  public unexecute() {
    this.catcher.updateDirection(-1)
  }
}

export class noEffectCommand implements Command {
  public execute() {
    return undefined
  }
  public unexecute() {
    return undefined
  }
}
