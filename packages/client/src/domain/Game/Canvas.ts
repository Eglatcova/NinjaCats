import Settings from './Settings'

class Canvas {
  private ctx: CanvasRenderingContext2D

  constructor(parent: HTMLDivElement) {
    const { width, height } = Settings.getInstance().getSize()
    const canvas = document.createElement('canvas')
    canvas.height = height
    canvas.width = width
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
    const { width, height } = Settings.getInstance().getSize()
    this.ctx.clearRect(0, 0, width, height)
  }

  public drawText(
    x: number,
    y: number,
    text: string,
    fontSize: number,
    color: string
  ) {
    this.ctx.font = `${fontSize}px Handjet`
    this.ctx.fillStyle = color
    this.ctx.fillText(text, x, y)
  }
}

export default Canvas
