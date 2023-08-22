export interface AnimateStrategy {
  animate: (
    x: number,
    y: number,
    velocity: number,
    dt: number
  ) => { newX: number; newY: number }
}

export class SoaringStrategy implements AnimateStrategy {
  public animate(x: number, y: number, velocity: number, dt: number) {
    const newY = y + velocity * dt
    const newX = x + Math.sin(newY / 10) * 5
    return { newX, newY }
  }
}

export class FreeFallStrategy implements AnimateStrategy {
  public animate(x: number, y: number, velocity: number, dt: number) {
    const newY = y + velocity * dt
    return { newX: x, newY }
  }
}
