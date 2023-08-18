import Canvas from './Canvas'

export interface RenderStrategy {
  render: (g: Canvas, x: number, y: number, w: number, h: number) => void
}

export class FuchsiaStrategy implements RenderStrategy {
  public render(g: Canvas, x: number, y: number, w: number, h: number) {
    g.drawRect(x, y, w, h, '#FF00FF')
  }
}

export class BlueStrategy implements RenderStrategy {
  public render(g: Canvas, x: number, y: number, w: number, h: number) {
    g.drawRect(x, y, w, h, '#0000FF')
  }
}
