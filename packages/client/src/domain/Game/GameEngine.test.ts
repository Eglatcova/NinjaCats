import GameEngine from './GameEngine'
import Lives from './Lives'
import Score from './Score'

jest.mock('./Canvas')

describe('Test Engine', () => {
  let ge: GameEngine

  beforeEach(() => {
    const someDiv = document.createElement('div')

    ge = new GameEngine(someDiv, (score: number) => {
      console.log('console.log')
    })
  })

  beforeAll(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(() => 42)
  })

  test('Init Test', async () => {
    const scoreGetter = () => Reflect.get(ge, 'score') as Score
    const livesGetter = () => Reflect.get(ge, 'lives') as Lives

    expect(scoreGetter().getScore()).toBe(0)
    expect(livesGetter().isAlive()).toBeTruthy()
  })

  test('Retry Test', async () => {
    const scoreGetter = () => Reflect.get(ge, 'score') as Score
    const livesGetter = () => Reflect.get(ge, 'lives') as Lives

    expect(scoreGetter().getScore()).toBe(0)
    expect(livesGetter().isAlive()).toBeTruthy()
  })
})
