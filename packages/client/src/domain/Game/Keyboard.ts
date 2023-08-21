enum ENABLED_KEYS {
  LEFT = 'left',
  RIGHT = 'right',
}
export default class Keyboard {
  static KEYS = ENABLED_KEYS
  private pressedKeys: Partial<Record<ENABLED_KEYS, boolean>> = {}

  constructor() {
    window.addEventListener('keydown', e => {
      this.setKey(e, true)
    })
    window.addEventListener('keyup', e => {
      this.setKey(e, false)
    })
    window.addEventListener('blur', () => {
      this.pressedKeys = {}
    })
  }
  private setKey(event: KeyboardEvent, isPressed: boolean) {
    let key
    switch (event.key) {
      case 'd':
      case 'ArrowRight':
        key = Keyboard.KEYS.RIGHT
        break
      case 'a':
      case 'ArrowLeft':
        key = Keyboard.KEYS.LEFT
        break
      default:
        break
    }

    if (!key) return
    this.pressedKeys[key] = isPressed
  }

  public isPressed(key: ENABLED_KEYS) {
    return this.pressedKeys[key]
  }
}
