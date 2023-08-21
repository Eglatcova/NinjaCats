export interface AnimateStrategy {
  animate: (x: number, y: number, dt: number) => { newX: number; newY: number }
}

export class SoaringStrategy implements AnimateStrategy {
  public animate(x: number, y: number, dt: number) {
    const newY = y + 0.1 * dt
    const newX = x + Math.sin(newY / 10) * 5
    return { newX, newY }
  }
}

export class FreeFallStrategy implements AnimateStrategy {
  public animate(x: number, y: number, dt: number) {
    const newY = y + 0.1 * dt
    return { newX: x, newY }
  }
}
