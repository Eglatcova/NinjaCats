import { Collider } from './interfaces'

export default class BoxCollider implements Collider {
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {}

  public getParams() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    }
  }
}
