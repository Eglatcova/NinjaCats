import Catcher from './Catcher'
import Score from './Score'
import Lives from './Lives'

export interface Command {
  execute: () => void
  unexecute: () => void
}

export class MacroCommand implements Command {
  private commandList: Command[] = []
  public add(command: Command) {
    this.commandList.push(command)
    return this
  }

  public execute() {
    this.commandList.forEach(command => command.execute())
  }

  public unexecute() {
    this.commandList.forEach(command => command.unexecute())
  }
}

export class IncreaseScoreCommand implements Command {
  constructor(private score: Score, private scoreDelta: number) {}
  public execute() {
    this.score.increaseScore(this.scoreDelta)
  }
  public unexecute() {
    return undefined
  }
}

export class IncreaseVelocityCommand implements Command {
  constructor(private catcher: Catcher, public velocity: number) {}

  public execute() {
    this.catcher.updateVelocity(this.velocity)
  }
  public unexecute() {
    this.catcher.updateVelocity(-this.velocity)
  }
}

export class ReverseDirectionCommand implements Command {
  constructor(private catcher: Catcher) {}

  public execute() {
    this.catcher.reverseDirection()
  }
  public unexecute() {
    this.catcher.reverseDirection()
  }
}

export class NoEffectCommand implements Command {
  public execute() {
    return undefined
  }
  public unexecute() {
    return undefined
  }
}

export class LoseLiveCommand implements Command {
  constructor(private lives: Lives) {}

  public execute() {
    this.lives.decreaseLives()
  }
  public unexecute() {
    return undefined
  }
}
