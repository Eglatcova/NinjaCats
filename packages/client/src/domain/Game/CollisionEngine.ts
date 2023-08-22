import { Collider } from './interfaces'

enum LAYERS {
  CATCHER,
  SIDE_BOUNDS,
  BOTTOM_BOUNDS,
}
export default class CollisionEngine {
  static LAYERS = LAYERS
  private layers: Partial<Record<LAYERS, Collider[]>> = {}

  public addToLayer(obj: Collider, layer: LAYERS) {
    if (this.layers[layer]) {
      this.layers[layer]!.push(obj)
    } else {
      this.layers[layer] = [obj]
    }
  }

  private checkHorizontalCollision(obj1: Collider, obj2: Collider) {
    const { x: x1, width: w1 } = obj1.getParams()
    const { x: x2, width: w2 } = obj2.getParams()
    return x1 < x2 + w2 && x1 + w1 > x2
  }

  private checkVerticalCollision(obj1: Collider, obj2: Collider) {
    const { y: y1, height: h1 } = obj1.getParams()
    const { y: y2, height: h2 } = obj2.getParams()
    return y1 < y2 + h2 && y1 + h1 > y2
  }

  public checkSideBoundsCollision(obj: Collider) {
    return this.layers[LAYERS.SIDE_BOUNDS]?.some(bound => {
      return this.checkHorizontalCollision(obj, bound)
    })
  }

  public checkBottomBoundsCollision(obj: Collider) {
    return this.layers[LAYERS.BOTTOM_BOUNDS]?.some(bound => {
      return this.checkVerticalCollision(obj, bound)
    })
  }

  public checkCatcherCollision(obj: Collider) {
    return this.layers[LAYERS.CATCHER]?.some(bound => {
      return (
        this.checkVerticalCollision(obj, bound) &&
        this.checkHorizontalCollision(obj, bound)
      )
    })
  }
}
