import { Collider } from './interfaces'

class Canvas implements Collider {
  private width = 800
  private height = 600
  private ctx: CanvasRenderingContext2D

  constructor(parent: HTMLDivElement) {
    const canvas = document.createElement('canvas')
    canvas.height = this.height
    canvas.width = this.width
    parent.appendChild(canvas)
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw Error("Canvas didn't find")
    }
    this.ctx = ctx
  }

  public drawRect(x: number, y: number, w: number, h: number, color: string) {
    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, w, h)
  }

  public clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  public getParams() {
    return {
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
    }
  }
}

export default Canvas
