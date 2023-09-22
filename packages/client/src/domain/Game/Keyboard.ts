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
    this.registerGamepad()
  }

  private registerGamepad() {
    const update = () => {
      const gamepad = navigator.getGamepads()[0]
      if (!gamepad) return
      this.setAxes(gamepad)
      setTimeout(() => {
        update()
      }, 100)
    }

    window.addEventListener('gamepadconnected', update)
  }

  private setAxes(gamepad: Gamepad) {
    const axis = gamepad.axes[0] || 0
    const leftArrow = gamepad.buttons[14].pressed || false
    const rightArrow = gamepad.buttons[15].pressed || false
    if (axis >= 0.1 || rightArrow) {
      this.pressedKeys[Keyboard.KEYS.RIGHT] = true
      this.pressedKeys[Keyboard.KEYS.LEFT] = false
    } else if (axis <= -0.1 || leftArrow) {
      this.pressedKeys[Keyboard.KEYS.RIGHT] = false
      this.pressedKeys[Keyboard.KEYS.LEFT] = true
    } else {
      this.pressedKeys[Keyboard.KEYS.RIGHT] = false
      this.pressedKeys[Keyboard.KEYS.LEFT] = false
    }
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
