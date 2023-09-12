import Canvas from './Canvas'

export interface RenderStrategy {
  render: (
    g: Canvas,
    x: number,
    y: number,
    w: number,
    h: number,
    text: string
  ) => void
}

export class NegativeStrategy implements RenderStrategy {
  public render(
    g: Canvas,
    x: number,
    y: number,
    w: number,
    h: number,
    text: string
  ) {
    g.drawRect(x, y, w, h, '#D94B25')

    const fontSize = 32
    const textX = x + w / 2
    const textY = y + h / 2 + fontSize * (1 / 3)
    g.drawText(textX, textY, text, fontSize, '#ffffff', 'center')
  }
}

export class PositiveStrategy implements RenderStrategy {
  public render(
    g: Canvas,
    x: number,
    y: number,
    w: number,
    h: number,
    text: string
  ) {
    g.drawRect(x, y, w, h, '#138C82')

    const fontSize = 32
    const textX = x + w / 2
    const textY = y + h / 2 + fontSize * (1 / 3)
    g.drawText(textX, textY, text, fontSize, '#ffffff', 'center')
  }
}
