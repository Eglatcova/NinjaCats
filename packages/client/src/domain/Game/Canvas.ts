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
    color: string,
    textAlign: CanvasTextAlign = 'left'
  ) {
    this.ctx.font = `${fontSize}px Handjet`
    this.ctx.fillStyle = color
    this.ctx.textAlign = textAlign
    this.ctx.fillText(text, x, y)
  }

  public drawImage(x: number, y: number, w: number, h: number, imgURL: string) {
    const image = new Image()
    image.src = imgURL
    this.ctx.drawImage(image, x, y, w, h)
  }

  public drawHeart(x: number, y: number, color: string) {
    const { ctx } = this

    const STEP_IN_PX = 5

    const absCoordinates = [
      [0, -1],
      [-2, -1],
      [-2, 0],
      [-3, 0],
      [-3, 2],
      [-2, 2],
      [-2, 3],
      [-1, 3],
      [-1, 4],
      [0, 4],
      [0, 5],
      [1, 5],
      [1, 4],
      [2, 4],
      [2, 3],
      [3, 3],
      [3, 2],
      [4, 2],
      [4, 0],
      [3, 0],
      [3, -1],
      [1, -1],
      [1, 0],
      [0, 0],
    ]

    ctx.beginPath()
    ctx.moveTo(x, y)

    absCoordinates.forEach(([absX, absY]) => {
      ctx.lineTo(x + absX * STEP_IN_PX, y + absY * STEP_IN_PX)
    })

    ctx.fillStyle = color
    ctx.fill()
  }
}

export default Canvas
