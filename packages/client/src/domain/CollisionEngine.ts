import { Collider } from './interfaces'

enum LAYERS {
  BASKET,
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
}
