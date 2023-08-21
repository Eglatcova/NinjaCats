export interface Collider {
  getParams: () => {
    x: number
    y: number
    width: number
    height: number
  }
}
